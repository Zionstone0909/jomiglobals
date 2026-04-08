import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ShoppingBag, X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WishlistButton from "@/components/WishlistButton";

import catEyewear from "@/assets/cat-eyewear.jpg";
import glasses1 from "@/assets/glasses-1.jpg";
import glasses2 from "@/assets/glasses-2.jpg";
import glasses3 from "@/assets/glasses-3.jpg";
import glasses4 from "@/assets/glasses-4.jpg";
import glasses5 from "@/assets/glasses-5.jpg";
import glasses6 from "@/assets/glasses-6.jpg";
import glasses7 from "@/assets/glasses-7.jpg";
import glasses8 from "@/assets/glasses-8.jpg";
import glasses9 from "@/assets/glasses-9.jpg";
import glasses10 from "@/assets/glasses-10.jpg";
import glasses11 from "@/assets/glasses-11.jpg";
import glasses12 from "@/assets/glasses-12.jpg";
import glasses13 from "@/assets/glasses-13.jpg";
import glasses14 from "@/assets/glasses-14.jpg";
import glasses15 from "@/assets/glasses-15.jpg";

const products = [
  { id: "EW-001", name: "Cat Eye Black & Gold", image: glasses1, price: "₦25,000" },
  { id: "EW-002", name: "Cat Eye Gold & Silver", image: glasses2, price: "₦25,000" },
  { id: "EW-003", name: "Round Green Crystal", image: glasses3, price: "₦22,000" },
  { id: "EW-004", name: "Cat Eye White", image: glasses4, price: "₦25,000" },
  { id: "EW-005", name: "Floral Cat Eye", image: glasses5, price: "₦28,000" },
  { id: "EW-006", name: "Black Cat Eye Slim", image: glasses6, price: "₦22,000" },
  { id: "EW-007", name: "White Square Bold", image: glasses7, price: "₦24,000" },
  { id: "EW-008", name: "Clear Oversized", image: glasses8, price: "₦26,000" },
  { id: "EW-009", name: "Red Square", image: glasses9, price: "₦24,000" },
  { id: "EW-010", name: "Tortoise Cat Eye", image: glasses10, price: "₦28,000" },
  { id: "EW-011", name: "Clear Round", image: glasses11, price: "₦22,000" },
  { id: "EW-012", name: "Cat Eye Black & White", image: glasses12, price: "₦25,000" },
  { id: "EW-013", name: "Cat Eye Classic Black", image: glasses13, price: "₦24,000" },
  { id: "EW-014", name: "Rose Gold Cat Eye", image: glasses14, price: "₦28,000" },
  { id: "EW-015", name: "Cat Eye Bold Black", image: glasses15, price: "₦26,000" },
];

interface SelectedProduct {
  id: string;
  name: string;
  image: string;
  price: string;
}

const Eyewear = () => {
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-50px" });
  const [selected, setSelected] = useState<SelectedProduct | null>(null);
  const [orderName, setOrderName] = useState("");

  const handleOrder = (item: SelectedProduct) => {
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

      {/* Hero Banner */}
      <section className="relative w-full h-[60vh] overflow-hidden">
        <motion.img
          src={catEyewear}
          alt="Eyewear Collection"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
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
            <p className="section-label">Eyewear</p>
            <h1
              className="text-3xl md:text-5xl tracking-[0.04em] font-normal italic mb-3"
              style={{ color: "hsl(40 20% 92%)", fontFamily: "var(--font-display)" }}
            >
              Clarity & Style
            </h1>
            <p
              className="text-[12px] tracking-[0.15em] font-light max-w-md mx-auto"
              style={{ color: "hsl(40 20% 92% / 0.5)" }}
            >
              Anti-blue light glasses crafted for elegance
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
            <h2 className="section-title text-foreground italic">Anti-Blue Female Glasses</h2>
            <p
              className="text-[12px] tracking-[0.15em] font-light mt-3 max-w-lg mx-auto"
              style={{ color: "hsl(40 20% 92% / 0.4)" }}
            >
              Tap any frame to order — we'll confirm via WhatsApp
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {products.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={gridInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: Math.min(0.1 + (i % 8) * 0.08, 0.8), duration: 0.5 }}
              >
                <button
                  onClick={() => setSelected(product)}
                  className="group block w-full text-left"
                >
                  <div className="aspect-square overflow-hidden bg-secondary mb-3 relative">
                    <img
                      src={product.image}
                      alt={product.name}
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
                        product_id: product.id,
                        product_name: product.name,
                        product_image: product.image,
                        product_price: product.price,
                        category: "Eyewear",
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
                    {product.name}
                  </h3>
                  <p
                    className="text-[11px] tracking-[0.05em] font-light mt-1"
                    style={{ color: "hsl(40 60% 55%)" }}
                  >
                    {product.price}
                  </p>
                </button>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link to="/" className="btn-see-more">
              Back to Home
            </Link>
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

      <Footer />
    </div>
  );
};

export default Eyewear;
