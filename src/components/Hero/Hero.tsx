import styles from './Hero.module.scss';
import Image from 'next/image';
import Button from '@/components/atoms/Button/Button';

export default function Hero() {
    return (
        <div className={styles.hero}>
            <div className={styles.imageWrapper}>
                <picture>
                    <source media='(max-width: 768px)' srcSet='/images/hero-mobile.png'/>
                    <Image src="/images/hero-desktop.png" alt="Hero Image Desktop" className={styles.heroImage} fill />
                </picture>
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
