import CollectionCard from "./CollectionCard/CollectionCard";
import type Collection from "@/types/Collection";
import styles from './CollectionCarousel.module.scss';

const collections: Collection[] = [
    {
        id: '1',
        name: 'Gol D Style',
        image: '/images/gol-d-style.jpeg',
        accentColor: '#c1a966'
    },
    {
        id: '2',
        name: 'City Pop Dream',
        image: '/images/city-pop-dream.jpeg',
        accentColor: '#72c07f'
    },
    {
        id: '3',
        name: 'Step into The Flame',
        image: '/images/step-into-the-flame.jpeg',
        accentColor: '#ae93bf'
    }
]

export default function CollectionCarousel() {
    return (
        <div className={styles.container}>
            {collections.map((collection) => (
                <CollectionCard
                    key={collection.id}
                    name={collection.name}
                    image={collection.image}
                    color={collection.accentColor}
                />
            ))}
        </div>
    )
}