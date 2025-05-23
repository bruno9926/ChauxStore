import styles from './Category.module.scss';
import Image from 'next/image';

type CategoryProps = {
    name: string,
    image: string
}

export default function Category({ name, image }: CategoryProps) {
    return (
        <div className={styles.category}>
            <Image alt={name} src={image} fill />
            <div className={styles.overlay}>
                <h3>{name}</h3>
            </div>
        </div>
    )
}