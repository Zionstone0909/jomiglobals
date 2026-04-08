import CategoryPage from "@/components/CategoryPage";
import catJewelry from "@/assets/cat-jewelry.jpg";

const FineJewelry = () => (
  <CategoryPage
    label="Fine Jewelry"
    title="Eternal Brilliance"
    description="Handcrafted pieces that tell your story"
    bannerImage={catJewelry}
    whatsappText="Hi, I'm interested in your fine jewelry collection"
  />
);

export default FineJewelry;
