import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const OurStory = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="section-label">THE HOUSE</p>
          <h1 className="text-3xl md:text-5xl tracking-[0.04em] mt-4" style={{ fontFamily: "var(--font-display)" }}>
            <em>Our Story</em>
          </h1>
          <div className="gold-line mt-6" />
        </motion.div>
      </section>

      {/* Content */}
      <section className="max-w-3xl mx-auto px-6 pb-24 space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-xl md:text-2xl tracking-[0.04em] mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <em>A Legacy of Elegance</em>
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed font-normal" style={{ fontFamily: "var(--font-body)" }}>
            Jomi Jewels was born from a passion for timeless beauty and exquisite craftsmanship.
            What started as a curated collection of fine pieces has grown into a house that celebrates
            individuality, luxury, and the art of self-expression through jewelry.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <h2
            className="text-xl md:text-2xl tracking-[0.04em] mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <em>Our Vision</em>
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed font-normal" style={{ fontFamily: "var(--font-body)" }}>
            We believe that luxury should be accessible, personal, and meaningful. Every piece in our
            collection is hand-selected to ensure it meets the highest standards of quality and design.
            From fine jewelry to watches, fragrances to eyewear — we curate for those who appreciate
            the finer things in life.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h2
            className="text-xl md:text-2xl tracking-[0.04em] mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <em>The Jomi Experience</em>
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed font-normal" style={{ fontFamily: "var(--font-body)" }}>
            Shopping with Jomi is a personal experience. We connect directly with our clients, offering
            bespoke recommendations, styling advice, and white-glove service. Because at Jomi, every
            client is family.
          </p>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default OurStory;
