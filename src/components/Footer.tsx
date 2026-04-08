import { Link } from "react-router-dom";
import { Instagram, Phone } from "lucide-react";
import logoLight from "@/assets/jomi-jewels-logo-clean.png";
import logoDark from "@/assets/logo-dark.svg";
import { useTheme } from "next-themes";

const footerLinks = [
  {
    title: "Collections",
    links: [
      { name: "Fine Jewelry", href: "/fine-jewelry" },
      { name: "Men's Rings", href: "/mens-rings" },
      { name: "Cufflinks", href: "/cufflinks" },
      { name: "Fashion", href: "/fashion" },
      { name: "Watches", href: "/watches" },
      { name: "Fragrance", href: "/fragrance" },
      { name: "Beauty", href: "/beauty" },
      { name: "Eyewear", href: "/eyewear" },
    ],
  },
  {
    title: "Services",
    links: [
      { name: "Contact Us", href: "https://wa.me/2348163195023" },
      { name: "FAQs", href: "/faqs" },
    ],
  },
  {
    title: "The House",
    links: [
      { name: "Our Story", href: "/our-story" },
      { name: "Sustainability", href: "/sustainability" },
    ],
  },
];

const Footer = () => {
  const { theme } = useTheme();
  const footerLogo = theme === "light" ? logoDark : logoLight;

  return (
    <footer className="footer-section relative">
      {/* Top gold line */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px]"
        style={{ background: "linear-gradient(90deg, transparent, hsl(var(--gold) / 0.4), transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20">
        {/* Logo */}
        <div className="text-center mb-16">
          <img src={footerLogo} alt="Jomi Jewels" className="h-20 w-auto mx-auto mb-4 object-contain" />
          <div className="gold-line" />
        </div>

        {/* Links grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          {footerLinks.map((section) => (
            <div key={section.title} className="text-center">
              <h3
                className="text-[10px] tracking-[0.3em] uppercase mb-6 font-normal text-primary/70"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    {link.href.startsWith("http") ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] tracking-[0.12em] uppercase font-normal transition-colors duration-400 text-muted-foreground/70 hover:text-primary"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-[11px] tracking-[0.12em] uppercase font-normal transition-colors duration-400 text-muted-foreground/70 hover:text-primary"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social */}
        <div className="flex justify-center gap-8 mb-12">
          <a
            href="https://instagram.com/thekingjomi_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground/60 transition-colors duration-400 hover:text-primary"
          >
            <Instagram size={16} strokeWidth={1} />
          </a>
          <a
            href="https://instagram.com/jomi_jewels_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground/60 transition-colors duration-400 hover:text-primary"
          >
            <Instagram size={16} strokeWidth={1} />
          </a>
          <a
            href="https://wa.me/2348163195023"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground/60 transition-colors duration-400 hover:text-primary"
          >
            <Phone size={16} strokeWidth={1} />
          </a>
        </div>

        {/* Bottom */}
        <div
          className="pt-8 text-center border-t border-border/30"
        >
          <p
            className="text-[9px] tracking-[0.2em] font-light text-muted-foreground/40"
          >
            © 2026 JOMI GLOBAL. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
