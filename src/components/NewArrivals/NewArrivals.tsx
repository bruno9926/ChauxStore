import Product from "@/types/Product";
import SectionCarousel from "../SectionCarousel/SectionCarousel";

export default async function NewArrivals() {
    const products: Product[] = await fetchProducts();
    return (
        <div className="padded-container">
            <SectionCarousel title="New Arrivals" products={products} />
        </div>
    )
}

async function fetchProducts(): Promise<Product[]> {
    const response = await fetch(`${process.env.API_URL}/api/products`);
    return await response.json();
}