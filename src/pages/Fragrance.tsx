import CategoryPage from "@/components/CategoryPage";
import catFragrance from "@/assets/cat-fragrance.jpg";

const Fragrance = () => (
  <CategoryPage
    label="Fragrance"
    title="Signature Scents"
    description="Your essence, bottled"
    bannerImage={catFragrance}
    whatsappText="Hi, I'm interested in your fragrances"
  />
);

export default Fragrance;
