import styles from './SectionCarousel.module.scss';
import sliderStyles from './slider/slider.module.scss';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

export default function SectionCarouselSkeleton() {
    return (
        <div className="padded-container">
            <div className={styles.carousel}>
                <Skeleton width={300} height={32} />
            </div>
            <Slider/>
        </div>
    );
}

const Slider = () => {
    return (
        <div className={sliderStyles.slider} style={{ overflow: "hidden"}}>
            {Array(10).fill({}).map((_,i) => (
                <Skeleton width={250} height={300} key={i}/>
            ))}
        </div>
    )
}