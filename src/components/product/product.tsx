'use client'
import { CldImage } from 'next-cloudinary';

import Image from 'next/image';
import styles from './product.module.scss'
// icons
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";

type ProductProps = {
    image: string | null,
    title: string,
    subtitle: string,
    price: number,
    isFavorite?: boolean,
}

export default function ProductCard({ image, title, subtitle, price, isFavorite = false }: ProductProps) {
    const imagePlaceHolder = "public/images/products/flame-bomber.png"
    return (
        <div className={styles.card}>
            <div className={styles.imageWrapper}>
                <CldImage src={image ?? imagePlaceHolder} alt={`${image}-image`} fill className={styles.image} /> : null
                {isFavorite ?
                    <FaHeart className={styles.heart} size={24} /> :
                    <FiHeart className={styles.heart} size={24} />
                }
            </div>
            <div className={styles.info}>
                <h3>{title}</h3>
                <h4 className={styles.subtitle}>{subtitle}</h4>
                <p className={styles.price}>${price / 100}</p>
            </div>
        </div>
    )
}
