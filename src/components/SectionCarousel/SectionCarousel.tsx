import Slider from './slider/slider';
import styles from './SectionCarousel.module.scss';
// types
import type Product from '@/types/Product';

type SectionCarouselProps = {
    title: string;
    products: Product[];
};

export default function SectionCarousel({ title, products }: SectionCarouselProps) {
  return (
    <div className={styles.carousel}>
      <h2>{title}</h2>
      <Slider products={products} />
    </div>
  );
}