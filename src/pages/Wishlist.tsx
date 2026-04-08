import { motion } from "framer-motion";
import { Heart, Trash2 } from "lucide-react";
import { Link, Navigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useWishlist } from "@/hooks/useWishlist";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Wishlist = () => {
  const { user, isReady } = useAuth();
  const { wishlist, toggleWishlist } = useWishlist();

  if (!isReady) return null;
  if (!user) return <Navigate to="/auth" />;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-[140px] pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="gold-line mb-5" />
            <p className="section-label">Your Collection</p>
            <h1
              className="text-2xl md:text-4xl tracking-[0.04em] font-normal italic"
              style={{ color: "hsl(var(--foreground))", fontFamily: "var(--font-display)" }}
            >
              Wishlist
            </h1>
          </motion.div>

          {wishlist.length === 0 ? (
            <div className="text-center py-16">
              <Heart size={40} className="mx-auto mb-4 text-muted-foreground" />
              <p className="text-sm text-muted-foreground font-light mb-6">
                Your wishlist is empty
              </p>
              <Link to="/" className="btn-see-more">
                Explore Collections
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {wishlist.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="group"
                >
                  <div className="aspect-square overflow-hidden bg-secondary mb-3 relative">
                    {item.product_image ? (
                      <img
                        src={item.product_image}
                        alt={item.product_name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                        <Heart size={24} />
                      </div>
                    )}
                    <button
                      onClick={() =>
                        toggleWishlist({
                          product_id: item.product_id,
                          product_name: item.product_name,
                          product_image: item.product_image ?? undefined,
                          product_price: item.product_price ?? undefined,
                          category: item.category ?? undefined,
                        })
                      }
                      className="absolute top-2 right-2 w-8 h-8 rounded-full bg-background/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Trash2 size={14} className="text-destructive" />
                    </button>
                  </div>
                  <h3 className="text-[11px] tracking-[0.08em] font-light text-foreground">
                    {item.product_name}
                  </h3>
                  {item.product_price && (
                    <p className="text-[11px] tracking-[0.05em] font-light mt-1 text-primary">
                      {item.product_price}
                    </p>
                  )}
                  {item.category && (
                    <p className="text-[10px] tracking-[0.1em] font-light mt-1 text-muted-foreground uppercase">
                      {item.category}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Wishlist;
