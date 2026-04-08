import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const pillars = [
  {
    title: "Ethical Sourcing",
    description:
      "We partner with suppliers who share our commitment to responsible practices. Every gemstone and metal in our collection is sourced with integrity and transparency.",
  },
  {
    title: "Quality Over Quantity",
    description:
      "We believe in curating fewer, better pieces that are built to last. By focusing on timeless design and superior craftsmanship, we reduce waste and encourage mindful consumption.",
  },
  {
    title: "Sustainable Packaging",
    description:
      "Our packaging is designed with the environment in mind — using recycled and recyclable materials wherever possible, without compromising the luxurious unboxing experience.",
  },
  {
    title: "Community Impact",
    description:
      "We're committed to giving back. A portion of our proceeds supports local artisan communities and education initiatives in the regions where our materials are sourced.",
  },
];

const Sustainability = () => {
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
          <p className="section-label">OUR COMMITMENT</p>
          <h1 className="text-3xl md:text-5xl tracking-[0.04em] mt-4" style={{ fontFamily: "var(--font-display)" }}>
            <em>Sustainability</em>
          </h1>
          <div className="gold-line mt-6" />
          <p
            className="max-w-xl mx-auto mt-6 text-muted-foreground text-sm leading-relaxed font-normal"
            style={{ fontFamily: "var(--font-body)" }}
          >
            At Jomi Jewels, luxury and responsibility go hand in hand. We're dedicated to building a
            more sustainable future for the jewelry industry.
          </p>
        </motion.div>
      </section>

      {/* Pillars */}
      <section className="max-w-4xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="border-t border-border/30 pt-6"
            >
              <h3
                className="text-[13px] md:text-[14px] tracking-[0.12em] uppercase font-medium mb-3"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {pillar.title}
              </h3>
              <p
                className="text-muted-foreground text-sm leading-relaxed font-normal"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sustainability;
