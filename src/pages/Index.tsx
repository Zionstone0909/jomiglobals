import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategoryBanner from "@/components/CategoryBanner";
import FeaturedProducts from "@/components/FeaturedProducts";
import Footer from "@/components/Footer";

import catJewelry from "@/assets/cat-jewelry.jpg";
import catFashion from "@/assets/cat-fashion.jpg";
import catWatches from "@/assets/cat-watches.jpg";
import catFragrance from "@/assets/cat-fragrance.jpg";
import catBeauty from "@/assets/cat-beauty.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />

      <CategoryBanner
        id="fine-jewelry"
        href="/fine-jewelry"
        label="Fine Jewelry"
        title="Eternal Brilliance"
        subtitle="Handcrafted pieces that tell your story"
        image={catJewelry}
        alt="Fine jewelry collection"
      />

      <CategoryBanner
        id="fashion"
        href="/fashion"
        label="Fashion"
        title="New Season"
        subtitle="Curated elegance for the modern woman"
        image={catFashion}
        alt="Fashion collection"
      />

      <CategoryBanner
        id="watches"
        href="/watches"
        label="Watches"
        title="Timeless Elegance"
        subtitle="Precision meets luxury"
        image={catWatches}
        alt="Luxury watches"
      />

      <CategoryBanner
        id="fragrance"
        href="/fragrance"
        label="Fragrance"
        title="Signature Scents"
        subtitle="Your essence, bottled"
        image={catFragrance}
        alt="Luxury fragrances"
      />

      <CategoryBanner
        id="beauty"
        href="/beauty"
        label="Beauty"
        title="Radiant Glow"
        subtitle="Reveal your natural luminance"
        image={catBeauty}
        alt="Beauty collection"
      />

      <FeaturedProducts />

      <Footer />
    </div>
  );
};

export default Index;
