import CollectionCard from "./CollectionCard/CollectionCard";
import type Collection from "@/types/Collection";
import styles from './CollectionCarousel.module.scss';

const collections: Collection[] = [
    {
        id: '1',
        name: 'Gol D Style',
        image: '/images/gol-d-style.jpeg'
    },
    {
        id: '2',
        name: 'City Pop Dream',
        image: '/images/city-pop-dream.jpeg'
    },
    {
        id: '3',
        name: 'step into the flame',
        image: '/images/step-into-the-flame.jpeg'
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