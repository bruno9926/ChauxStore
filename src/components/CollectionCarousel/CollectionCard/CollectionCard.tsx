import styles from './CollectionCard.module.scss';
import Image from 'next/image';

import Button from '@/components/atoms/Button/Button';

type CollectionCardProps = {
    name: string,
    image: string,
    color: string
}

export default function CollectionCard({
    name, image, color
}: CollectionCardProps) {
    return (
        <div className={styles.card}>
            <Image fill src={image} alt='collection'/>
            <div
                className={styles.overlay}
                style={{"--accent-color": color} as React.CSSProperties}
            >
                <h3>{name}</h3>
            </div>
        </div>
    )
}