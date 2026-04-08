import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WishlistButton from "@/components/WishlistButton";

import ringsHero from "@/assets/rings-hero.jpg";
import ring1 from "@/assets/ring-1.jpg";
import ring2 from "@/assets/ring-2.jpg";
import ring3 from "@/assets/ring-3.jpg";
import ring4 from "@/assets/ring-4.jpg";
import ring5 from "@/assets/ring-5.jpg";
import ring6 from "@/assets/ring-6.jpg";
import ring7 from "@/assets/ring-7.jpg";
import ring8 from "@/assets/ring-8.jpg";
import ring9 from "@/assets/ring-9.jpg";
import ring10 from "@/assets/ring-10.jpg";
import ring11 from "@/assets/ring-11.jpg";
import ring12 from "@/assets/ring-12.jpg";
import ring13 from "@/assets/ring-13.jpg";
import ring14 from "@/assets/ring-14.jpg";
import ring15 from "@/assets/ring-15.jpg";
import ring16 from "@/assets/ring-16.jpg";
import ring17 from "@/assets/ring-17.jpg";
import ring18 from "@/assets/ring-18.jpg";
import ring19 from "@/assets/ring-19.jpg";
import ring20 from "@/assets/ring-20.jpg";
import ring21 from "@/assets/ring-21.jpg";
import ring22 from "@/assets/ring-22.jpg";
import ring23 from "@/assets/ring-23.jpg";
import ring24 from "@/assets/ring-24.jpg";
import ring25 from "@/assets/ring-25.jpg";
import ring26 from "@/assets/ring-26.jpg";
import ring27 from "@/assets/ring-27.jpg";
import ring28 from "@/assets/ring-28.jpg";
import ring29 from "@/assets/ring-29.jpg";
import ring30 from "@/assets/ring-30.jpg";
import ring31 from "@/assets/ring-31.jpg";
import ringTitanium from "@/assets/ring-titanium.jpg";
import ringImg3465 from "@/assets/ring-img-img_3465.jpg";
import ringImg3469 from "@/assets/ring-img-img_3469.jpg";
import ringImg3470 from "@/assets/ring-img-img_3470.jpg";
import ringImg3471 from "@/assets/ring-img-img_3471.jpg";
import ringImg3472 from "@/assets/ring-img-img_3472.jpg";

const rings = [
  { id: "JR-001", name: "Sovereign Gold Band", image: ring1, price: "₦85,000" },
  { id: "JR-002", name: "Obsidian Knight Ring", image: ring2, price: "₦92,000" },
  { id: "JR-003", name: "Royal Signet Ring", image: ring3, price: "₦78,000" },
  { id: "JR-004", name: "Carbon Fiber Elite", image: ring4, price: "₦95,000" },
  { id: "JR-005", name: "Diamond Enclave Band", image: ring5, price: "₦120,000" },
  { id: "JR-006", name: "Midnight Tungsten", image: ring6, price: "₦68,000" },
  { id: "JR-007", name: "Heritage Gold Crest", image: ring7, price: "₦110,000" },
  { id: "JR-008", name: "Platinum Noir Ring", image: ring8, price: "₦135,000" },
  { id: "JR-009", name: "Celtic Warrior Band", image: ring9, price: "₦75,000" },
  { id: "JR-010", name: "Damascus Steel Ring", image: ring10, price: "₦88,000" },
  { id: "JR-011", name: "Black Onyx Statement", image: ring11, price: "₦98,000" },
  { id: "JR-012", name: "Rose Gold Regent", image: ring12, price: "₦105,000" },
  { id: "JR-013", name: "Titanium Edge Band", image: ring13, price: "₦72,000" },
  { id: "JR-014", name: "Sapphire Crown Ring", image: ring14, price: "₦145,000" },
  { id: "JR-015", name: "Brushed Silver Classic", image: ring15, price: "₦65,000" },
  { id: "JR-016", name: "Emerald Inlay Band", image: ring16, price: "₦130,000" },
  { id: "JR-017", name: "Matte Black Prestige", image: ring17, price: "₦82,000" },
  { id: "JR-018", name: "Dual Tone Navigator", image: ring18, price: "₦90,000" },
  { id: "JR-019", name: "White Gold Monarch", image: ring19, price: "₦115,000" },
  { id: "JR-020", name: "Textured Anthracite", image: ring20, price: "₦76,000" },
  { id: "JR-021", name: "Gold Mesh Luxe Band", image: ring21, price: "₦100,000" },
  { id: "JR-022", name: "Carved Ebony Ring", image: ring22, price: "₦88,000" },
  { id: "JR-023", name: "Diamond Channel Set", image: ring23, price: "₦160,000" },
  { id: "JR-024", name: "Polished Cobalt Ring", image: ring24, price: "₦70,000" },
  { id: "JR-025", name: "Vintage Brass Signet", image: ring25, price: "₦85,000" },
  { id: "JR-026", name: "Frosted Palladium", image: ring26, price: "₦125,000" },
  { id: "JR-027", name: "Geometric Art Band", image: ring27, price: "₦92,000" },
  { id: "JR-028", name: "Hammered Gold Ring", image: ring28, price: "₦98,000" },
  { id: "JR-029", name: "Ridged Platinum Band", image: ring29, price: "₦140,000" },
  { id: "JR-030", name: "Smoky Quartz Ring", image: ring30, price: "₦108,000" },
  { id: "JR-031", name: "Satin Finish Classic", image: ring31, price: "₦74,000" },
  { id: "JR-032", name: "Titanium Apex Ring", image: ringTitanium, price: "₦82,000" },
  { id: "JR-033", name: "Imperial Gold Band", image: ringImg3465, price: "₦118,000" },
  { id: "JR-034", name: "Noble Crest Ring", image: ringImg3469, price: "₦95,000" },
  { id: "JR-035", name: "Sovereign Shield Band", image: ringImg3470, price: "₦105,000" },
  { id: "JR-036", name: "Onyx Throne Ring", image: ringImg3471, price: "₦112,000" },
  { id: "JR-037", name: "Dynasty Gold Ring", image: ringImg3472, price: "₦128,000" },
];

interface SelectedRing {
  id: string;
  name: string;
  image: string;
  price: string;
}

const MensRings = () => {
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-50px" });
  const [selected, setSelected] = useState<SelectedRing | null>(null);
  const [orderSize, setOrderSize] = useState("");
  const [orderName, setOrderName] = useState("");

  const handleOrder = (ring: SelectedRing) => {
    const message = `Hi, I'd like to order:\n\n` +
      `🔹 ${ring.name}\n` +
      `💰 ${ring.price}\n` +
      `📏 Size: ${orderSize || "Not specified"}\n` +
      `👤 Name: ${orderName || "Not specified"}\n\n` +
      `Product ID: ${ring.id}`;
    window.open(
      `https://wa.me/2348163195023?text=${encodeURIComponent(message)}`,
      "_blank"
    );
    setSelected(null);
    setOrderSize("");
    setOrderName("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative w-full h-[60vh] overflow-hidden">
        <img
          src={ringsHero}
          alt="Men's Rings Collection"
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
            <p className="section-label">Men's Collection</p>
            <h1
              className="text-3xl md:text-5xl tracking-[0.04em] font-normal italic mb-3"
              style={{ color: "hsl(40 20% 92%)", fontFamily: "var(--font-display)" }}
            >
              Signature Rings
            </h1>
            <p
              className="text-[12px] tracking-[0.15em] font-light max-w-md mx-auto"
              style={{ color: "hsl(40 20% 92% / 0.5)" }}
            >
              Handcrafted luxury rings for the modern gentleman
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

        <div className="max-w-7xl mx-auto" ref={gridRef}>
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
              Tap any ring to order — we'll confirm via WhatsApp
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {rings.map((ring, i) => (
              <motion.div
                key={ring.id}
                initial={{ opacity: 0, y: 30 }}
                animate={gridInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: Math.min(0.1 + (i % 8) * 0.08, 0.8), duration: 0.5 }}
              >
                <button
                  onClick={() => setSelected(ring)}
                  className="group block w-full text-left"
                >
                  <div className="aspect-square overflow-hidden bg-secondary mb-3 relative">
                    <img
                      src={ring.image}
                      alt={ring.name}
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
                        product_id: ring.id,
                        product_name: ring.name,
                        product_image: ring.image,
                        product_price: ring.price,
                        category: "Mens Rings",
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
                    {ring.name}
                  </h3>
                  <p
                    className="text-[11px] tracking-[0.05em] font-light mt-1"
                    style={{ color: "hsl(40 60% 55%)" }}
                  >
                    {ring.price}
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
                <p
                  className="text-sm font-light"
                  style={{ color: "hsl(40 60% 55%)" }}
                >
                  {selected.price}
                </p>
                <p
                  className="text-[10px] mt-1 font-light"
                  style={{ color: "hsl(40 20% 92% / 0.3)" }}
                >
                  ID: {selected.id}
                </p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div>
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
              <div>
                <label
                  className="text-[10px] tracking-[0.2em] uppercase font-light mb-2 block"
                  style={{ color: "hsl(40 20% 92% / 0.5)" }}
                >
                  Ring Size
                </label>
                <select
                  value={orderSize}
                  onChange={(e) => setOrderSize(e.target.value)}
                  className="w-full bg-transparent border border-border px-4 py-3 text-[12px] font-light text-foreground focus:outline-none focus:border-primary transition-colors appearance-none"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  <option value="" className="bg-card">Select size</option>
                  {[6, 7, 8, 9, 10, 11, 12, 13, 14].map((s) => (
                    <option key={s} value={s} className="bg-card">
                      Size {s}
                    </option>
                  ))}
                  <option value="custom" className="bg-card">Custom — I'll specify</option>
                </select>
              </div>
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

            <p
              className="text-[10px] text-center mt-4 font-light"
              style={{ color: "hsl(40 20% 92% / 0.3)" }}
            >
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

export default MensRings;
