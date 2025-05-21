import styles from './Hero.module.scss';

export default function Hero() {
    return (
        <div className={styles.hero}>
            <div className={styles.content}>
                <h1>Welcome to our store</h1>
                <p>Discover the latest trends in fashion and accessories.</p>
                <div className={styles.buttonContainer}>
                    <button className="btn">Shop Now</button>
                </div>
            </div>
        </div>
    );
}
