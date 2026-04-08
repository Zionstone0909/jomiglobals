import CategoryPage from "@/components/CategoryPage";
import catBeauty from "@/assets/cat-beauty.jpg";

const Beauty = () => (
  <CategoryPage
    label="Beauty"
    title="Radiant Glow"
    description="Reveal your natural luminance"
    bannerImage={catBeauty}
    whatsappText="Hi, I'm interested in the beauty collection"
  />
);

export default Beauty;
