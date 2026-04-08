import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface CategoryPageProps {
  label: string;
  title: string;
  description: string;
  bannerImage: string;
  whatsappText: string;
}

const CategoryPage = ({ label, title, description, bannerImage, whatsappText }: CategoryPageProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero banner */}
      <section className="relative w-full h-[70vh]">
        <img
          src={bannerImage}
          alt={label}
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40" />
        <div
          className="absolute left-8 top-1/4 bottom-1/4 w-[1px] hidden md:block"
          style={{ background: "linear-gradient(to bottom, transparent, hsl(40 60% 55% / 0.3), transparent)" }}
        />
        <div className="absolute bottom-16 md:bottom-20 left-0 right-0 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="gold-line mb-5" />
            <p className="section-label">{label}</p>
            <h1
              className="text-3xl md:text-5xl tracking-[0.04em] font-normal italic mb-3"
              style={{ color: "hsl(40 20% 92%)", fontFamily: "var(--font-display)" }}
            >
              {title}
            </h1>
            <p
              className="text-[12px] tracking-[0.15em] font-light max-w-md mx-auto"
              style={{ color: "hsl(40 20% 92% / 0.5)" }}
            >
              {description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content area */}
      <section className="py-20 md:py-28 px-6 relative">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[1px]"
          style={{ background: "linear-gradient(90deg, transparent, hsl(40 60% 55% / 0.2), transparent)" }}
        />

        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="gold-line mb-6" />
            <h2
              className="text-xl md:text-2xl tracking-[0.04em] font-normal italic mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Explore Our Collection
            </h2>
            <p
              className="text-[13px] leading-relaxed font-light mb-10 max-w-lg mx-auto"
              style={{ color: "hsl(40 20% 92% / 0.5)" }}
            >
              Browse our curated selection and find the perfect piece. Tap below to speak with us directly on WhatsApp for pricing, availability, and orders.
            </p>
            <a
              href={`https://wa.me/2348163195023?text=${encodeURIComponent(whatsappText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-see-more"
            >
              Order on WhatsApp
            </a>
          </motion.div>

          <motion.div
            className="mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Link to="/" className="text-[11px] tracking-[0.15em] uppercase font-light transition-colors duration-300 hover:text-primary" style={{ color: "hsl(40 20% 92% / 0.4)" }}>
              ← Back to Home
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CategoryPage;
