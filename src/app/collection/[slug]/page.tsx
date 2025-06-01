import { Collection, Product } from "@/generated/prisma"
import CollectionHero from "./components/CollectionHero/CollectionHero";
import ProductGrid from "./components/ProductsGrid/ProductGrid";

type CollectionWithProducts = Collection & { products: Product[] }

type CollectionPageProps = {
    params: { slug: string }
}
export default async function CollectionPage({ params }: CollectionPageProps) {
    const { slug } = await params;
    const collection: CollectionWithProducts = await fetchCollectionWithProducts(slug);
    
    return (
        <div>
            <CollectionHero title={collection.name} color={collection.accentColor}/>
            <ProductGrid products={collection.products} />
            <div className="padded-container">
                <h1>Get this Look</h1>
            </div>
        </div>
    )
}

async function fetchCollectionWithProducts(slug: string): Promise<any> {
    const response = await fetch(`${process.env.API_URL}/api/collections/${slug}/products`, { cache: "no-store" });
    return response.json();
}