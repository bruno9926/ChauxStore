import { Collection, Product } from "@/generated/prisma"

type CollectionWithProducts = Collection & { products: Product[]}

type CollectionPageProps = {
    params: { slug: string}
}
export default async function CollectionPage({ params }: CollectionPageProps) {
    const { slug } = await params;
    const collection: CollectionWithProducts = await fetchCollectionWithProducts(slug);

    return (
        <>
        <p>{collection.name}</p>
        <ul>{collection.products.map(product => (
            <li key={product.id}>{JSON.stringify(product)}</li>
        ))}</ul>
        </>
    )
}

async function fetchCollectionWithProducts(slug: string): Promise<any> {
    const response = await fetch(`${process.env.API_URL}/api/collections/${slug}/products`, { cache: "no-store" });
    return response.json();
}