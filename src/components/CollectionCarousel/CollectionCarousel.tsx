import CollectionCard from "./CollectionCard/CollectionCard";
import type Collection from "@/types/Collection";
import styles from './CollectionCarousel.module.scss';

const collections: Collection[] = [
    {
        id: '1',
        name: 'step into the flame',
        image: '/images/hero3.png'
    },
    {
        id: '1',
        name: 'step into the flame',
        image: '/images/hero3.png'
    },
    {
        id: '1',
        name: 'step into the flame',
        image: '/images/hero3.png'
    }
]

export default function CollectionCarousel() {
    return (
        <div className={styles.container}>
            {collections.map((collection) => (
                <CollectionCard
                    key={collection.id}
                    image={collection.image}
                />
            ))}
        </div>
    )
}