import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Navigate } from "react-router-dom";
import { Settings, User, Mail, Globe, LogOut } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useCurrency, COUNTRIES } from "@/hooks/useCurrency";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SettingsPage = () => {
  const { user, isReady, signOut } = useAuth();
  const { currency, setCurrency } = useCurrency();
  const [displayName, setDisplayName] = useState("");
  const [country, setCountry] = useState("");
  const [loading, setLoading] = useState(false);
  const [profileLoading, setProfileLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    const fetchProfile = async () => {
      const { data } = await supabase
        .from("profiles")
        .select("display_name, country")
        .eq("user_id", user.id)
        .single();
      if (data) {
        setDisplayName(data.display_name || "");
        setCountry(data.country || currency.country);
      }
      setProfileLoading(false);
    };
    fetchProfile();
  }, [user]);

  if (!isReady) return null;
  if (!user) return <Navigate to="/auth" />;

  const handleSave = async () => {
    setLoading(true);
    const { error } = await supabase
      .from("profiles")
      .update({ display_name: displayName, country })
      .eq("user_id", user.id);
    if (error) {
      toast.error("Failed to update profile");
    } else {
      const found = COUNTRIES.find((c) => c.country === country);
      if (found) setCurrency(found);
      toast.success("Profile updated!");
    }
    setLoading(false);
  };

  const inputClass =
    "w-full bg-transparent border border-border px-4 py-3 text-sm font-light text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-[140px] pb-20 px-6">
        <div className="max-w-lg mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="gold-line mb-5" />
            <p className="section-label">Account</p>
            <h1
              className="text-2xl md:text-4xl tracking-[0.04em] font-normal italic"
              style={{ color: "hsl(var(--foreground))", fontFamily: "var(--font-display)" }}
            >
              Settings
            </h1>
          </motion.div>

          {profileLoading ? (
            <div className="text-center text-muted-foreground text-sm font-light py-12">
              Loading...
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              {/* Email (read-only) */}
              <div>
                <label className="text-[10px] tracking-[0.2em] uppercase font-light mb-2 block text-muted-foreground flex items-center gap-2">
                  <Mail size={12} /> Email
                </label>
                <input
                  type="email"
                  value={user.email || ""}
                  disabled
                  className={`${inputClass} opacity-50 cursor-not-allowed`}
                  style={{ fontFamily: "var(--font-body)" }}
                />
              </div>

              {/* Display Name */}
              <div>
                <label className="text-[10px] tracking-[0.2em] uppercase font-light mb-2 block text-muted-foreground flex items-center gap-2">
                  <User size={12} /> Display Name
                </label>
                <input
                  type="text"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  placeholder="Your name"
                  className={inputClass}
                  style={{ fontFamily: "var(--font-body)" }}
                />
              </div>

              {/* Country */}
              <div>
                <label className="text-[10px] tracking-[0.2em] uppercase font-light mb-2 block text-muted-foreground flex items-center gap-2">
                  <Globe size={12} /> Country & Currency
                </label>
                <select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className={`${inputClass} appearance-none cursor-pointer`}
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {COUNTRIES.map((c) => (
                    <option key={c.code} value={c.country} className="bg-background text-foreground">
                      {c.country} ({c.symbol})
                    </option>
                  ))}
                </select>
              </div>

              {/* Save Button */}
              <button
                onClick={handleSave}
                disabled={loading}
                className="btn-see-more w-full text-center"
              >
                <span className="flex items-center justify-center gap-2">
                  <Settings size={14} />
                  {loading ? "Saving..." : "Save Changes"}
                </span>
              </button>

              {/* Divider */}
              <div
                className="w-full h-[1px] my-4"
                style={{ background: "linear-gradient(90deg, transparent, hsl(40 60% 55% / 0.2), transparent)" }}
              />

              {/* Sign Out */}
              <button
                onClick={signOut}
                className="w-full text-center py-3 text-sm font-light tracking-[0.1em] text-destructive/70 hover:text-destructive transition-colors duration-300"
              >
                <span className="flex items-center justify-center gap-2">
                  <LogOut size={14} />
                  Sign Out
                </span>
              </button>
            </motion.div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SettingsPage;
