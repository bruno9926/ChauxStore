import { Category, Product } from "@/generated/prisma";
import SectionCarousel from "../SectionCarousel/SectionCarousel";

type EnrichedProduct = Product & { category: Category}

export default async function NewArrivals() {
    const products: EnrichedProduct[] = await fetchProducts();
    return (
        <div className="padded-container">
            <SectionCarousel title="New Arrivals" products={products} />
        </div>
    )
}

async function fetchProducts(): Promise<EnrichedProduct[]> {
    const response = await fetch(`${process.env.API_URL}/api/products`);
    return await response.json();
}