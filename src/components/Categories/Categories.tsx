import { Category } from "@/generated/prisma";
import styles from "./Categories.module.scss";
import CategoryTile from "./Category/Category";

export default async function Categories() {
    const categories: Category[] = await getCategories();
    return (
        <div className={styles.categories}>
            <div className="padded-container">
                <h1>Explore by Categories</h1>
            </div>
            <div className={styles.categoriesContainer}>
                {categories.map(category => (
                    <CategoryTile
                        key={category.id}
                        name={category.name}
                        image={category.image}
                    />
                ))}
            </div>
        </div>
    )
}

async function getCategories() {
    return Promise.resolve([])
    const response = await fetch(`${process.env.API_URL}/api/categories`);
    return await response.json();
}