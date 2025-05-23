import styles from './Button.module.scss';

type ButtonProps = {
    type?: 'primary' | 'secondary' | 'tertiary',
    children?: React.ReactNode
}

export default function Button({ type = 'tertiary', children }: ButtonProps) {

    const buttonStyles =
        type === 'primary' ? styles.primary :
        type === 'secondary' ? styles.secondary :
        type === 'tertiary' ? styles.tertiary : '';

    return (
        <button className={buttonStyles}>
            {children}
        </button>
    )
}