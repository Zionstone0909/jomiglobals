import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WishlistButton from "@/components/WishlistButton";

import cuff1 from "@/assets/cufflink-img_9530.jpg";
import cuffHero from "@/assets/cufflinks-hero.jpg";
import cuff2 from "@/assets/cufflink-img_9532.jpg";
import cuff3 from "@/assets/cufflink-img_9533.jpg";
import cuff4 from "@/assets/cufflink-img_9588.jpg";
import cuff5 from "@/assets/cufflink-img_9593.jpg";
import cuff6 from "@/assets/cufflink-img_9598.jpg";
import cuff7 from "@/assets/cufflink-img_9599.jpg";
import cuff8 from "@/assets/cufflink-img_9603.jpg";
import cuff9 from "@/assets/cufflink-img_9606.jpg";

const cufflinks = [
  { id: "CL-001", name: "Classic Gold Round", image: cuff1, price: "₦45,000" },
  { id: "CL-002", name: "Silver Square Elite", image: cuff2, price: "₦42,000" },
  { id: "CL-003", name: "Onyx & Gold Duo", image: cuff3, price: "₦52,000" },
  { id: "CL-004", name: "Crystal Diamond Set", image: cuff4, price: "₦58,000" },
  { id: "CL-005", name: "Brushed Titanium", image: cuff5, price: "₦48,000" },
  { id: "CL-006", name: "Rose Gold Prestige", image: cuff6, price: "₦55,000" },
  { id: "CL-007", name: "Midnight Carbon Pair", image: cuff7, price: "₦50,000" },
  { id: "CL-008", name: "Heritage Monogram", image: cuff8, price: "₦62,000" },
  { id: "CL-009", name: "Sapphire Accent Set", image: cuff9, price: "₦65,000" },
];

interface SelectedCufflink {
  id: string;
  name: string;
  image: string;
  price: string;
}

const Cufflinks = () => {
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-50px" });
  const [selected, setSelected] = useState<SelectedCufflink | null>(null);
  const [orderName, setOrderName] = useState("");

  const handleOrder = (item: SelectedCufflink) => {
    const message = `Hi, I'd like to order:\n\n` +
      `🔹 ${item.name}\n` +
      `💰 ${item.price}\n` +
      `👤 Name: ${orderName || "Not specified"}\n\n` +
      `Product ID: ${item.id}`;
    window.open(
      `https://wa.me/2348163195023?text=${encodeURIComponent(message)}`,
      "_blank"
    );
    setSelected(null);
    setOrderName("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative w-full h-[60vh] overflow-hidden">
        <img
          src={cuffHero}
          alt="Cufflinks Collection"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/50" />
        <div className="absolute bottom-16 md:bottom-20 left-0 right-0 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="gold-line mb-5" />
            <p className="section-label">Men's Accessories</p>
            <h1
              className="text-3xl md:text-5xl tracking-[0.04em] font-normal italic mb-3"
              style={{ color: "hsl(40 20% 92%)", fontFamily: "var(--font-display)" }}
            >
              Cufflinks
            </h1>
            <p
              className="text-[12px] tracking-[0.15em] font-light max-w-md mx-auto"
              style={{ color: "hsl(40 20% 92% / 0.5)" }}
            >
              The finishing touch of distinction
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-16 md:py-24 px-6 relative">
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
            <p className="section-label">Shop</p>
            <h2 className="section-title text-foreground italic">Our Collection</h2>
            <p
              className="text-[12px] tracking-[0.15em] font-light mt-3 max-w-lg mx-auto"
              style={{ color: "hsl(40 20% 92% / 0.4)" }}
            >
              Tap any pair to order — we'll confirm via WhatsApp
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {cufflinks.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={gridInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
              >
                <button
                  onClick={() => setSelected(item)}
                  className="group block w-full text-left"
                >
                  <div className="aspect-square overflow-hidden bg-secondary mb-3 relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                      width={800}
                      height={800}
                    />
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ background: "linear-gradient(to top, hsl(40 60% 55% / 0.15), transparent)" }}
                    />
                    <WishlistButton
                      product={{
                        product_id: item.id,
                        product_name: item.name,
                        product_image: item.image,
                        product_price: item.price,
                        category: "Cufflinks",
                      }}
                    />
                    <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div
                        className="w-9 h-9 rounded-full flex items-center justify-center"
                        style={{ background: "hsl(40 60% 55%)" }}
                      >
                        <ShoppingBag size={14} className="text-background" />
                      </div>
                    </div>
                  </div>
                  <h3
                    className="text-[11px] tracking-[0.08em] font-light text-foreground transition-colors duration-300 group-hover:text-primary"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {item.name}
                  </h3>
                  <p
                    className="text-[11px] tracking-[0.05em] font-light mt-1"
                    style={{ color: "hsl(40 60% 55%)" }}
                  >
                    {item.price}
                  </p>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Order Modal */}
      {selected && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelected(null)}
        >
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
          <motion.div
            className="relative w-full max-w-md bg-card border border-border p-6 md:p-8"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 nav-link"
              aria-label="Close"
            >
              <X size={18} />
            </button>

            <div className="flex gap-5 mb-6">
              <img
                src={selected.image}
                alt={selected.name}
                className="w-28 h-28 object-cover flex-shrink-0"
              />
              <div>
                <p className="section-label !mb-1">Order</p>
                <h3
                  className="text-lg tracking-[0.04em] font-normal italic mb-1"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {selected.name}
                </h3>
                <p className="text-sm font-light" style={{ color: "hsl(40 60% 55%)" }}>
                  {selected.price}
                </p>
                <p className="text-[10px] mt-1 font-light" style={{ color: "hsl(40 20% 92% / 0.3)" }}>
                  ID: {selected.id}
                </p>
              </div>
            </div>

            <div className="mb-6">
              <label
                className="text-[10px] tracking-[0.2em] uppercase font-light mb-2 block"
                style={{ color: "hsl(40 20% 92% / 0.5)" }}
              >
                Your Name
              </label>
              <input
                type="text"
                value={orderName}
                onChange={(e) => setOrderName(e.target.value)}
                placeholder="Enter your name"
                className="w-full bg-transparent border border-border px-4 py-3 text-[12px] font-light text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                style={{ fontFamily: "var(--font-body)" }}
              />
            </div>

            <button
              onClick={() => handleOrder(selected)}
              className="btn-see-more w-full text-center"
            >
              <span className="flex items-center justify-center gap-2">
                <ShoppingBag size={14} />
                Order via WhatsApp
              </span>
            </button>

            <p className="text-[10px] text-center mt-4 font-light" style={{ color: "hsl(40 20% 92% / 0.3)" }}>
              You'll be redirected to WhatsApp to confirm your order
            </p>
          </motion.div>
        </motion.div>
      )}

      <motion.div
        className="text-center py-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Link
          to="/"
          className="text-[11px] tracking-[0.15em] uppercase font-light transition-colors duration-300 hover:text-primary"
          style={{ color: "hsl(40 20% 92% / 0.4)" }}
        >
          ← Back to Home
        </Link>
      </motion.div>

      <Footer />
    </div>
  );
};

export default Cufflinks;
