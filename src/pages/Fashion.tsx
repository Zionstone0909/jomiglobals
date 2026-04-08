import CategoryPage from "@/components/CategoryPage";
import catFashion from "@/assets/cat-fashion.jpg";

const Fashion = () => (
  <CategoryPage
    label="Fashion"
    title="New Season"
    description="Curated elegance for the modern woman"
    bannerImage={catFashion}
    whatsappText="Hi, I'm interested in the fashion collection"
  />
);

export default Fashion;
