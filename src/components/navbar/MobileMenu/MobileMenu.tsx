'use client'
import { useState } from 'react';

import styles from './MobileMenu.module.scss';
import { HiX } from "react-icons/hi";

type MobileMenuProps = {
    isOpen: boolean,
    setMobileMenuOpen: (open: boolean) => void
}

type Section = {
    name: string,
    categories: string[]
}

const sections: Section[] = [
  {
    name: "Men",
    categories: [
      "Shirts",
      "T-Shirts",
      "Polos",
      "Pants",
      "Jeans",
      "Shorts",
      "Jackets",
      "Hoodies",
      "Shoes",
      "Accessories"
    ]
  },
  {
    name: "Women",
    categories: [
      "Tops",
      "Blouses",
      "Dresses",
      "Skirts",
      "Pants",
      "Jeans",
      "Shorts",
      "Jackets",
      "Hoodies",
      "Shoes",
      "Accessories"
    ]
  }
];

export default function MobileMenu({ isOpen, setMobileMenuOpen }: MobileMenuProps) {

    const [selectedSection, setSelectedSection] = useState<Section>(sections[0]);
    return (
        <div className={`${styles.menu} ${isOpen ? "" : styles.hidden}`}>
            <div className={styles.content}>
                <div className={styles.header}>
                    <div className={styles.sections}>
                        {sections.map((section, index) => (
                            <SectionTitle
                                key={index}
                                title={section.name}
                                isSelected={section.name === selectedSection.name}
                                onSelect={() => setSelectedSection(section)}
                            />
                        ))}
                    </div>
                    <button
                        className={styles.closeButton}
                        onClick={() => setMobileMenuOpen(false)}>
                        <HiX size={20} />
                    </button>
                </div>
                <div className={styles.categories}>
                    {selectedSection.categories.map((category, index) => (
                        <p key={index}>{category}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}

type SectionTitleProps = {
    title: string,
    isSelected?: boolean
    onSelect: () => void
}
const SectionTitle = ({ title, isSelected = false, onSelect }: SectionTitleProps) => (
    <p
        tabIndex={0}
        role='button'
        onKeyDown={(e) => e.key === 'Enter' && onSelect()}
        className={isSelected ? styles.selectedSection : ""}
        onClick={() => onSelect()} >
        <b>{title}</b>
    </p>
)