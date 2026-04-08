import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import catEyewear from "@/assets/cat-eyewear.jpg";
import glasses1 from "@/assets/glasses-1.jpg";
import glasses2 from "@/assets/glasses-2.jpg";
import glasses3 from "@/assets/glasses-3.jpg";
import glasses4 from "@/assets/glasses-4.jpg";

const previewProducts = [
  { name: "Cat Eye Black & Gold", image: glasses1 },
  { name: "Cat Eye Gold & Silver", image: glasses2 },
  { name: "Round Green Crystal", image: glasses3 },
  { name: "Cat Eye White", image: glasses4 },
];

const FeaturedProducts = () => {
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-50px" });

  return (
    <>
      {/* Full-bleed banner */}
      <section id="eyewear" className="relative w-full h-screen overflow-hidden">
        <motion.img
          src={catEyewear}
          alt="Eyewear collection"
          loading="lazy"
          className="w-full h-[120%] object-cover absolute top-0"
          width={1920}
          height={1080}
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30" />
        <div
          className="absolute left-8 top-1/4 bottom-1/4 w-[1px] hidden md:block"
          style={{ background: "linear-gradient(to bottom, transparent, hsl(40 60% 55% / 0.3), transparent)" }}
        />
        <div className="absolute bottom-16 md:bottom-24 left-0 right-0 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="gold-line mb-5" />
            <p className="section-label">Eyewear</p>
            <h2
              className="text-2xl md:text-5xl tracking-[0.04em] font-normal mb-2 italic"
              style={{ color: "hsl(40 20% 92%)", fontFamily: "var(--font-display)" }}
            >
              Clarity & Style
            </h2>
            <Link to="/eyewear" className="btn-see-more-light mt-6 inline-block">
              Discover
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Preview grid */}
      <section className="py-20 md:py-28 px-6 bg-background relative">
        {/* Decorative top border */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[1px]"
          style={{ background: "linear-gradient(90deg, transparent, hsl(40 60% 55% / 0.2), transparent)" }}
        />

        <div className="max-w-6xl mx-auto" ref={gridRef}>
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            animate={gridInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="gold-line mb-5" />
            <p className="section-label">Eyewear</p>
            <h2 className="section-title text-foreground italic">Anti-Blue Female Glasses</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {previewProducts.map((product, i) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 30 }}
                animate={gridInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
              >
                <Link to="/eyewear" className="group block">
                  <div className="aspect-square overflow-hidden bg-secondary mb-3 relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                      width={800}
                      height={800}
                    />
                    {/* Gold hover overlay */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ background: "linear-gradient(to top, hsl(40 60% 55% / 0.15), transparent)" }}
                    />
                  </div>
                  <h3
                    className="text-[11px] tracking-[0.08em] font-light text-foreground transition-colors duration-300 group-hover:text-primary"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {product.name}
                  </h3>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-14"
            initial={{ opacity: 0 }}
            animate={gridInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <Link to="/eyewear" className="btn-see-more">
              View All Eyewear
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default FeaturedProducts;
