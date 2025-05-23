import styles from "./Categories.module.scss";
import Category from "./Category/Category";

export default function Categories() {
    return (
        <div className={styles.categories}>
            <h1>Explore by Categories</h1>
            <div className={styles.categoriesContainer}>
                <Category/>
                <Category/>
                <Category/>
                <Category/>
                <Category/>
                <Category/>
                <Category/>
                <Category/>
            </div>
        </div>
    )
}