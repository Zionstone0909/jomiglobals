import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useCurrency, COUNTRIES } from "@/hooks/useCurrency";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import jomiBrand from "@/assets/jomi-jewels-brand.png";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [country, setCountry] = useState("Nigeria");
  const [loading, setLoading] = useState(false);
  const { signIn, signUp } = useAuth();
  const { setCurrency } = useCurrency();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!isLogin && password !== confirmPassword) {
      toast.error("Passwords do not match");
      setLoading(false);
      return;
    }

    if (isLogin) {
      const { error } = await signIn(email, password);
      if (error) {
        toast.error(error.message);
      } else {
        toast.success("Welcome back!");
        navigate("/");
      }
    } else {
      const { error } = await signUp(email, password, displayName);
      if (error) {
        toast.error(error.message);
      } else {
        // Set currency based on selected country
        const found = COUNTRIES.find((c) => c.country === country);
        if (found) setCurrency(found);
        toast.success("Account created! Check your email to confirm.");
      }
    }
    setLoading(false);
  };

  const inputClass =
    "w-full bg-transparent border border-border px-4 py-3 text-sm font-light text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-[140px] pb-20 px-6 flex items-center justify-center">
        <div className="w-full max-w-4xl flex gap-0 md:gap-12 items-center">
          {/* Brand image - desktop only */}
          <motion.div
            className="hidden lg:block w-1/2 flex-shrink-0"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={jomiBrand}
              alt="Jomi Jewels"
              className="w-full rounded-sm"
            />
          </motion.div>

        <motion.div
          className="w-full lg:w-1/2 max-w-md mx-auto lg:mx-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="gold-line mb-6" />
          <p className="section-label">{isLogin ? "Welcome Back" : "Join Us"}</p>
          <h1
            className="text-2xl md:text-4xl tracking-[0.04em] font-normal italic mb-8 text-center"
            style={{ color: "hsl(var(--foreground))", fontFamily: "var(--font-display)" }}
          >
            {isLogin ? "Sign In" : "Create Account"}
          </h1>

          <form onSubmit={handleSubmit} className="space-y-5">
            {!isLogin && (
              <>
                <div>
                  <label className="text-[10px] tracking-[0.2em] uppercase font-light mb-2 block text-muted-foreground">
                    Display Name
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

                <div>
                  <label className="text-[10px] tracking-[0.2em] uppercase font-light mb-2 block text-muted-foreground">
                    Country
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
              </>
            )}

            <div>
              <label className="text-[10px] tracking-[0.2em] uppercase font-light mb-2 block text-muted-foreground">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className={inputClass}
                style={{ fontFamily: "var(--font-body)" }}
              />
            </div>

            <div>
              <label className="text-[10px] tracking-[0.2em] uppercase font-light mb-2 block text-muted-foreground">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                minLength={6}
                className={inputClass}
                style={{ fontFamily: "var(--font-body)" }}
              />
            </div>

            {!isLogin && (
              <div>
                <label className="text-[10px] tracking-[0.2em] uppercase font-light mb-2 block text-muted-foreground">
                  Confirm Password
                </label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  minLength={6}
                  className={inputClass}
                  style={{ fontFamily: "var(--font-body)" }}
                />
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="btn-see-more w-full text-center"
            >
              {loading ? "Please wait..." : isLogin ? "Sign In" : "Create Account"}
            </button>
          </form>

          <p className="text-center mt-6 text-sm font-light text-muted-foreground">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-primary hover:underline transition-colors"
            >
              {isLogin ? "Sign up" : "Sign in"}
            </button>
          </p>
        </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Auth;
