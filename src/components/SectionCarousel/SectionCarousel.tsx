import Slider from './slider/slider';
import styles from './SectionCarousel.module.scss';
// types
import { Product, Category } from '@/generated/prisma';

type SectionCarouselProps = {
    title: string;
    products: (Product & { category: Category })[];
};

export default function SectionCarousel({ title, products }: SectionCarouselProps) {
  return (
    <div className={styles.carousel}>
      <h2>{title}</h2>
      <Slider products={products} />
    </div>
  );
}