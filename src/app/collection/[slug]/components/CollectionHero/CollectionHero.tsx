import styles from './CollectionHero.module.scss';
import Image from 'next/image';

type CollectionHeroProps = {
    title: string,
    color: string
}

export default function CollectionHero({ title, color }: CollectionHeroProps) {
    return (
        <div className={styles.hero}>
            <div className={styles.imageWrapper}>
                <picture>
                    <source media='(max-width: 768px)' srcSet='/images/step-into-the-flame.jpeg'/>
                    <Image src="/images/step-into-the-flame-h.png" alt="Hero Image Desktop" className={styles.heroImage} fill />
                </picture>
            </div>
        </div>
    );
}
