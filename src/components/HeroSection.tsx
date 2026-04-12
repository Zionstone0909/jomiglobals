import { motion } from "framer-motion";
import heroImg from "@/assets/hero-background.png";

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen">
      <img
        src={heroImg}
        alt="Jomi Global collection"
        className="w-full h-full object-cover object-top"
        width={1920}
        height={1080}
      />
      {/* Elegant overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent" />

      {/* Content */}
      <div className="absolute bottom-20 md:bottom-28 left-0 right-0 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="gold-line mb-6" />
          <p
            className="text-[11px] tracking-[0.4em] uppercase mb-4 font-light"
            style={{ color: "hsl(40 60% 55%)", fontFamily: "var(--font-body)" }}
          >
            The House of Jomi
          </p>
          <h1
            className="text-3xl md:text-6xl tracking-[0.06em] font-normal mb-4 italic"
            style={{ color: "hsl(40 20% 92%)", fontFamily: "var(--font-display)" }}
          >
            New Collection
          </h1>
          <p
            className="text-[12px] tracking-[0.15em] font-light mb-8 max-w-md mx-auto"
            style={{ color: "hsl(40 20% 92% / 0.6)", fontFamily: "var(--font-body)" }}
          >
            Exquisite craftsmanship meets timeless elegance
          </p>
          <a
            href="https://wa.me/2348163195023?text=Hi, I'm interested in the new collection"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-see-more-light"
          >
            Explore
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
