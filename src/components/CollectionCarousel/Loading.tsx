import styles from './CollectionCarousel.module.scss';
import cardStyles from './CollectionCard/CollectionCard.module.scss';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

export default function CollectionsSkeleton() {
    return (
        <div className={styles.container}>
            <div className="padded-container">
                <Skeleton width={300} height={32} />
            </div>
            <div className={styles.collections}>
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
            </div>
        </div>
    )
}

const CardSkeleton = () => {
    return (
        <div style={{border: "none", cursor: "auto"}} className={cardStyles.card}>
            <Skeleton height={"100%"} width={"100%"} />
        </div>
    )
}