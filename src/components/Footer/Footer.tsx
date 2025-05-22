import styles from './Footer.module.scss';

const sections = [
    {
        title: "Collections",
        elements: [
            'Man',
            'Woman'
        ]
    },
    {
        title: "Informacion Corporativa",
        elements: [
            'Acerca de CX',
            'Sostenibilidad',
            'Politica Empresarial',
            'Prensa'
        ]
    },
    {
        title: "Ayuda",
        elements: [
            'Servicio al cliente',
            'Mi cienta',
            'Terminos y condiciones',
            'Contacto'
        ]
    }
]

export default function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                {sections.map((section, index) => (
                    <Section key={index} title={section.title} elements={section.elements} />
                ))}
            </footer>
            <section className={styles.footerBottom}>
                2025 CX, Colombia Ltda.
            </section>
        </>
    )
}

type SectionProps = {
    title: string,
    elements: string[]
}

function Section({ title, elements }: SectionProps) {
    return (
        <div className={styles.section}>
            <h4>{title}</h4>
            {elements.map((element, index) => (
                <a href="#" key={index}>{element}</a>
            ))}
        </div>
    )
}