import ProductCard from "@/components/product/product"
import { Product } from "@/generated/prisma"

import styles from "./ProductGrid.module.scss";

type ProductGridProps = {
    products: Product[]
}
export default function ProductGrid({ products }: ProductGridProps) {
    return (
        <div className={styles.grid}>
            {products.map(product => (
                <ProductCard
                    key={product.id}
                    image={product.image || ""}
                    title={product.name}
                    subtitle={"Category Placeholder"}
                    price={product.price}
                    isFavorite={false}
                />
            ))}
        </div>
    )
}