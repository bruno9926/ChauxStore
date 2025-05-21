import Slider from './slider/slider';

type SectionCarouselProps = {
    title: string;
    products: any[];
};

export default function SectionCarousel({ title, products }: SectionCarouselProps) {
  return (
    <div>
      <h2>{title}</h2>
      <Slider products={products} />
    </div>
  );
}