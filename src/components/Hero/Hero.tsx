import styles from './Hero.module.scss';
import Image from 'next/image';
import Button from '@/components/atoms/Button/Button';

export default function Hero() {
    return (
        <div className={styles.hero}>
            <div className={styles.imageWrapper}>
                <Image src="/images/hero6.png" alt="Hero Image" className={styles.image} fill />
            </div>
            <div className={styles.overlay}>
                <h1>Welcome to our store</h1>
                <p>Discover the latest trends in fashion and accessories.</p>
                <div className={styles.buttonContainer}>
                    <Button>Shop Now</Button>
                </div>
            </div>
        </div>
    );
}
