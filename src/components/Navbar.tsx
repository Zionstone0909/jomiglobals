import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Search, User, Heart, MessageCircle, Menu, X, LogOut, Settings, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/hooks/useAuth";
import { useTheme } from "next-themes";
import logoDark from "@/assets/jomi-jewels-logo-clean.png";

const searchablePages = [
  { name: "Fine Jewelry", href: "/fine-jewelry", keywords: ["jewelry", "gold", "diamond", "necklace", "bracelet"] },
  { name: "Fashion", href: "/fashion", keywords: ["fashion", "clothing", "style", "luxury"] },
  { name: "Watches", href: "/watches", keywords: ["watch", "timepiece", "rolex", "time"] },
  { name: "Fragrance", href: "/fragrance", keywords: ["fragrance", "perfume", "scent", "cologne"] },
  { name: "Beauty", href: "/beauty", keywords: ["beauty", "makeup", "skincare", "cosmetics"] },
  { name: "Eyewear", href: "/eyewear", keywords: ["eyewear", "glasses", "sunglasses", "frames"] },
  { name: "Men's Rings", href: "/mens-rings", keywords: ["ring", "men", "signet", "band"] },
  { name: "Cufflinks", href: "/cufflinks", keywords: ["cufflink", "cuff", "accessories", "men"] },
];

const navItems = [
  { name: "Home", href: "/" },
  { name: "Fine Jewelry", href: "/fine-jewelry" },
  { name: "Fashion", href: "/fashion" },
  { name: "Watches", href: "/watches" },
  { name: "Fragrance", href: "/fragrance" },
  { name: "Beauty", href: "/beauty" },
  { name: "Eyewear", href: "/eyewear" },
  { name: "Men's Rings", href: "/mens-rings" },
  { name: "Cufflinks", href: "/cufflinks" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const searchInputRef = useRef<HTMLInputElement>(null);
  const { user, signOut } = useAuth();
  const { theme, setTheme } = useTheme();

  const filteredResults = searchQuery.trim()
    ? searchablePages.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.keywords.some((k) => k.includes(searchQuery.toLowerCase()))
      )
    : searchablePages;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  useEffect(() => {
    setSearchOpen(false);
    setSearchQuery("");
  }, [location.pathname]);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-background/95 backdrop-blur-md shadow-[0_10px_30px_-18px_hsl(var(--foreground)/0.18)]" : "bg-transparent"
        } ${!scrolled && theme === "light" ? "nav-force-light" : ""}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div
          className="w-full h-[1px]"
          style={{ background: "linear-gradient(90deg, transparent, hsl(40 60% 55%), transparent)" }}
        />

        <div className="flex items-center justify-between px-6 md:px-12 xl:px-16 py-4 md:py-5">
          <div className="flex items-center gap-4 w-[88px] md:w-[120px]">
            <button
              className="lg:hidden nav-link"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          <Link to="/" className="nav-logo-shell flex-shrink-0 rounded-full px-3 py-1.5 md:px-4 md:py-2">
            <img src={logoDark} alt="Jomi Jewels" className="nav-logo h-12 md:h-[3.35rem] xl:h-[3.6rem] w-auto object-contain" />
          </Link>

          <div className="flex items-center justify-end gap-4 md:gap-5 xl:gap-6 w-[148px] md:w-[190px]">
            <button className="nav-link" aria-label="Toggle theme" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              {theme === "dark" ? <Sun size={18} strokeWidth={1} /> : <Moon size={18} strokeWidth={1} />}
            </button>
            <button className="nav-link" aria-label="Search" onClick={() => setSearchOpen(!searchOpen)}>
              <Search size={18} strokeWidth={1} />
            </button>
            {user ? (
              <>
                <Link to="/settings" className="nav-link" aria-label="Settings">
                  <Settings size={18} strokeWidth={1} />
                </Link>
                <button className="nav-link flex items-center gap-1" aria-label="Sign out" onClick={() => signOut()}>
                  <LogOut size={18} strokeWidth={1} />
                </button>
              </>
            ) : (
              <Link to="/auth" className="nav-link" aria-label="Account">
                <User size={18} strokeWidth={1} />
              </Link>
            )}
            <Link to={user ? "/wishlist" : "/auth"} className="nav-link" aria-label="Wishlist">
              <Heart size={18} strokeWidth={1} />
            </Link>
            <a
              href="https://wa.me/2348163195023?text=Hi, I'd like to get in touch"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
              aria-label="Contact"
            >
              <MessageCircle size={18} strokeWidth={1} />
            </a>
          </div>
        </div>

        <nav className="hidden lg:flex justify-center gap-11 xl:gap-12 pb-4 md:pb-5 px-8">
          {navItems.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
            >
              <Link
                to={item.href}
                className={`nav-link ${location.pathname === item.href ? "!text-primary" : ""}`}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </nav>

        <div
          className="w-full h-[1px]"
          style={{ background: "linear-gradient(90deg, transparent, hsl(40 60% 55% / 0.3), transparent)" }}
        />
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-background pt-[100px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <nav className="flex flex-col items-center gap-8 pt-8">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    to={item.href}
                    className="nav-link text-sm"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Overlay */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            className="fixed inset-0 z-[55] bg-background/95 backdrop-blur-md pt-[120px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              onClick={() => { setSearchOpen(false); setSearchQuery(""); }}
              className="absolute top-6 right-6 nav-link"
              aria-label="Close search"
            >
              <X size={22} />
            </button>

            <div className="max-w-lg mx-auto px-6">
              <div className="relative mb-8">
                <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search collections..."
                  className="w-full bg-transparent border border-border pl-11 pr-4 py-3 text-sm font-light text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  style={{ fontFamily: "var(--font-body)" }}
                />
              </div>

              <div className="space-y-1">
                {filteredResults.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => navigate(item.href)}
                    className="w-full text-left px-4 py-3 text-sm tracking-[0.08em] font-light text-foreground/70 hover:text-primary hover:bg-primary/5 transition-colors duration-200"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {item.name}
                  </button>
                ))}
                {filteredResults.length === 0 && (
                  <p className="text-center text-sm text-muted-foreground font-light py-8">
                    No collections found
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
