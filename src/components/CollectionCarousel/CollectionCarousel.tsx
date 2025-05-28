import CollectionCard from "./CollectionCard/CollectionCard";
import styles from './CollectionCarousel.module.scss';
import type CollectionType from "@/types/Collection";

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
                    />
                ))}
            </div>
        </div>
    )
}

async function fetchCollections(): Promise<CollectionType[]> {
    const response = await fetch(`${process.env.API_URL}/api/collections`);
    await new Promise((resolve) => setTimeout(resolve, 3000))
    return await response.json();
}