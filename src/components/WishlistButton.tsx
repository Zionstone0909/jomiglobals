import { Heart } from "lucide-react";
import { useWishlist, WishlistItem } from "@/hooks/useWishlist";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface WishlistButtonProps {
  product: WishlistItem;
  className?: string;
}

const WishlistButton = ({ product, className = "" }: WishlistButtonProps) => {
  const { user } = useAuth();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const navigate = useNavigate();
  const wishlisted = isInWishlist(product.product_id);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!user) {
      toast.info("Please sign in to save favorites");
      navigate("/auth");
      return;
    }
    toggleWishlist(product);
  };

  return (
    <button
      onClick={handleClick}
      className={`absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 z-10 ${
        wishlisted
          ? "bg-primary/90 opacity-100"
          : "bg-background/70 opacity-0 group-hover:opacity-100"
      } ${className}`}
      aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
    >
      <Heart
        size={14}
        className={wishlisted ? "text-background fill-background" : "text-foreground"}
      />
    </button>
  );
};

export default WishlistButton;
