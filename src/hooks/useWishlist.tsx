import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "./useAuth";
import { toast } from "sonner";

export interface WishlistItem {
  product_id: string;
  product_name: string;
  product_image?: string;
  product_price?: string;
  category?: string;
}

export const useWishlist = () => {
  const { user, isReady } = useAuth();
  const queryClient = useQueryClient();

  const { data: wishlist = [] } = useQuery({
    queryKey: ["wishlist", user?.id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("wishlist")
        .select("*")
        .eq("user_id", user!.id)
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
    enabled: isReady && !!user,
  });

  const addMutation = useMutation({
    mutationFn: async (item: WishlistItem) => {
      const { error } = await supabase.from("wishlist").insert({
        user_id: user!.id,
        ...item,
      });
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["wishlist", user?.id] });
      toast.success("Added to wishlist");
    },
    onError: () => toast.error("Failed to add to wishlist"),
  });

  const removeMutation = useMutation({
    mutationFn: async (productId: string) => {
      const { error } = await supabase
        .from("wishlist")
        .delete()
        .eq("user_id", user!.id)
        .eq("product_id", productId);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["wishlist", user?.id] });
      toast.success("Removed from wishlist");
    },
    onError: () => toast.error("Failed to remove from wishlist"),
  });

  const isInWishlist = (productId: string) =>
    wishlist.some((item) => item.product_id === productId);

  const toggleWishlist = (item: WishlistItem) => {
    if (!user) return false; // not logged in
    if (isInWishlist(item.product_id)) {
      removeMutation.mutate(item.product_id);
    } else {
      addMutation.mutate(item);
    }
    return true;
  };

  return { wishlist, isInWishlist, toggleWishlist, isLoading: addMutation.isPending || removeMutation.isPending };
};
