// model
import { Collection, Product } from "@/generated/prisma"
// styles
import styles from './styles.module.scss';
import { GoArrowLeft } from "react-icons/go";
// components
import CollectionHero from "./components/CollectionHero/CollectionHero";
import ProductGrid from "./components/ProductsGrid/ProductGrid";
import Looks from "./components/Looks/Looks";
import Link from 'next/link';

type CollectionWithProducts = Collection & { products: Product[] }

type CollectionPageProps = {
    params: { slug: string }
}
export default async function CollectionPage({ params }: CollectionPageProps) {
    const { slug } = await params;
    const collection: CollectionWithProducts = await fetchCollectionWithProducts(slug);

    return (
        <div className={styles.mainContent}>
            <CollectionHero title={collection.name} color={collection.accentColor} />
            <Title title={collection.name}/>
            <div className={styles.description}>
                <p>{collection.description}</p>
            </div>
            <ProductGrid products={collection.products} />
            <Looks />
        </div>
    )
}

const Title = ({ title }: { title: string }) => {
    return (
        <div className="padded-container">
            <div className={styles.collectionTitle}>
                <Link href={"/"}>
                    <GoArrowLeft />
                </Link>
                <h1>{title}</h1>
            </div>
        </div>
    )
}

async function fetchCollectionWithProducts(slug: string): Promise<CollectionWithProducts> {
    const response = await fetch(`${process.env.API_URL}/api/collections/${slug}/products`, { cache: "no-store" });
    return response.json();
}