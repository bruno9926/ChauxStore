import Image from "next/image";
import styles from './Looks.module.scss';

export default function Looks() {
    return (
        <div className={styles.looks}>
            <h1>Get this Look</h1>
            <div className={styles.container}>
                <Look image="/images/look1.png" />
                <Look image="/images/look3.png" />
                <Look image="/images/look2.png" />
                <Look image="/images/look4.png" />
            </div>
        </div>
    )
}

const Look = ({ image }: { image: string }) => {
    return (
        <div className={styles.look}>
            <Image fill src={image} alt="look1" />
        </div>
    )
}