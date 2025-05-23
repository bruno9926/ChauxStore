import SectionCarousel from "@/components/SectionCarousel/SectionCarousel";
import Hero from "@/components/Hero/Hero";
import products from "@/data/products.json";
import CollectionCarousel from "@/components/CollectionCarousel/CollectionCarousel";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="padded-container">
        <SectionCarousel title="New Arrivals" products={products} />
      </div>
      <CollectionCarousel />
    </div>
  );
}
