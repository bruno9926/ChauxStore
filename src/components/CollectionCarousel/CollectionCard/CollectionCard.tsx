import styles from './CollectionCard.module.scss';
import Image from 'next/image';
import Link from 'next/link';

type CollectionCardProps = {
    name: string,
    image: string,
    color: string,
    slug: string
}

export default function CollectionCard({
    name, image, color, slug
}: CollectionCardProps) {
    return (
        <Link href={`/collection/${slug}`} className={styles.card}>
            <Image fill src={image} alt='collection' />
            <div
                className={styles.overlay}
                style={{ "--accent-color": color } as React.CSSProperties}
            >
                <h3>{name}</h3>
            </div>
        </Link>
    )
}