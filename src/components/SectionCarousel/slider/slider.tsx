'use client';

import { useRef } from 'react';
import ProductCard from '@/components/product/product';
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
// styles
import styles from './slider.module.scss';
// types
import { Product, Category } from '@/generated/prisma';

type SliderProps = {
    products: (Product & { category: Category })[];
}
export default function Slider({ products }: SliderProps) {

    enum Direction {
        LEFT = 'left',
        RIGHT = 'right',
    }

    const sliderRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: Direction) => {
        const container = sliderRef.current;
        if (!container) return;
        const scrollAmount = 700;
        container.scrollBy({
            left: direction === Direction.LEFT ? -scrollAmount : scrollAmount,
            behavior: 'smooth',
        });
    }

    const Arrow = ({ direction }: { direction: Direction }) => {
        const directionStyles = direction === Direction.LEFT ? styles.left : styles.right;

        return (
            <div className={`${styles.arrow} ${directionStyles}`} onClick={() => scroll(direction)}>
                {direction === Direction.LEFT ? <GoArrowLeft /> : <GoArrowRight />}
            </div>
        );
    }
    return (
        <div className={styles.wrapper}>
            <div className={styles.slider} ref={sliderRef}>
                {products.map((product, index) => (
                    <div className={styles.sliderSlot} key={index} >
                        <ProductCard
                            image={product.image}
                            title={product.name}
                            subtitle={product.category.name}
                            price={product.price}
                            isFavorite={false} // this depends on the user, not the product entity
                        />
                    </div>
                ))}
            </div>
            <Arrow direction={Direction.LEFT} />
            <Arrow direction={Direction.RIGHT} />
        </div>
    )
}