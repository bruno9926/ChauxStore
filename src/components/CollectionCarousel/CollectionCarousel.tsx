import CollectionCard from "./CollectionCard/CollectionCard";
import styles from './CollectionCarousel.module.scss';

import collections from '@/data/collections.json';

export default function CollectionCarousel() {
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