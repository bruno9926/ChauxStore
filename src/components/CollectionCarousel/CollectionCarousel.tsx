import CollectionCard from "./CollectionCard/CollectionCard";
import styles from './CollectionCarousel.module.scss';
import { Collection } from "@/generated/prisma";

export default async function CollectionCarousel() {

    const collections = await fetchCollections();

    return (
        <div className={styles.container}>
            <div className="padded-container">
                <h1>Latest Collections</h1>
            </div>
            <div className={styles.collections}>
                {collections.map((collection) => (
                    <CollectionCard
                        key={collection.id}
                        name={collection.name}
                        image={collection.image}
                        color={collection.accentColor}
                        slug={collection.slug}
                    />
                ))}
            </div>
        </div>
    )
}

async function fetchCollections(): Promise<Collection[]> {
    const response = await fetch(`${process.env.API_URL}/api/collections`);
    return await response.json();
}