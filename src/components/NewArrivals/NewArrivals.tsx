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
    await new Promise((resolve) => setTimeout(resolve, 3000))
    return await response.json();
}