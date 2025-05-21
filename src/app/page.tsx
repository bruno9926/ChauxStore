import SectionCarousel from "@/components/SectionCarousel/SectionCarousel";
import products from "@/data/products.json";

export default function Home() {
  return (
    <div>
      <h1>CX</h1>
      <SectionCarousel title="New Arrivals" products={products} />
    </div>
  );
}
