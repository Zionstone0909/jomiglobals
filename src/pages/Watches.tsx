import CategoryPage from "@/components/CategoryPage";
import catWatches from "@/assets/cat-watches.jpg";

const Watches = () => (
  <CategoryPage
    label="Watches"
    title="Timeless Elegance"
    description="Precision meets luxury"
    bannerImage={catWatches}
    whatsappText="Hi, I'm interested in your watches collection"
  />
);

export default Watches;
