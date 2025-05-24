import styles from "./Categories.module.scss";
import Category from "./Category/Category";

import categories from '@/data/categories.json';

export default function Categories() {
    return (
        <div className={styles.categories}>
            <div className="padded-container">
                <h1>Explore by Categories</h1>
            </div>
            <div className={styles.categoriesContainer}>
                {categories.map(category => (
                    <Category
                        key={category.id}
                        name={category.name}
                        image={category.image}
                    />
                ))}
            </div>
        </div>
    )
}