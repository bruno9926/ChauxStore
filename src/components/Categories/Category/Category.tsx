import styles from './Category.module.scss';
import Image from 'next/image';

export default function Category() {
    return (
        <div className={styles.category}>
            <Image alt="category" src="/images/products/distortion-flame.png" fill />
            <div className={styles.overlay}>
                <h3>Shirts</h3>
            </div>
        </div>
    )
}