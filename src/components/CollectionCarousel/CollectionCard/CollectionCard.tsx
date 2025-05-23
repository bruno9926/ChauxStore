import styles from './CollectionCard.module.scss';
import Image from 'next/image';

type CollectionCardProps = {
    image: string
}

export default function CollectionCard({ image }: CollectionCardProps) {
    return (
        <div className={styles.card}>
            <Image fill src={image} alt='collection'/>
        </div>
    )
}