import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface CategoryBannerProps {
  id?: string;
  href: string;
  label: string;
  title: string;
  subtitle?: string;
  image: string;
  alt: string;
}

const CategoryBanner = ({ id, href, label, title, subtitle, image, alt }: CategoryBannerProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id={id} ref={ref} className="relative w-full h-screen overflow-hidden">
      <motion.img
        src={image}
        alt={alt}
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
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="gold-line mb-5" />
          <p className="section-label">{label}</p>
          <h2
            className="text-2xl md:text-5xl tracking-[0.04em] font-normal mb-2 italic"
            style={{ color: "hsl(40 20% 92%)", fontFamily: "var(--font-display)" }}
          >
            {title}
          </h2>
          {subtitle && (
            <p
              className="text-[12px] tracking-[0.15em] font-light mb-8"
              style={{ color: "hsl(40 20% 92% / 0.5)" }}
            >
              {subtitle}
            </p>
          )}
          <Link to={href} className="btn-see-more-light mt-6 inline-block">
            Discover
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CategoryBanner;
