'use client'
import { useState } from 'react';

import styles from './navbar.module.scss';
// components
import Link from 'next/link';
import MobileMenu from './MobileMenu/MobileMenu';
// icons
import { GoHeart, GoPerson, GoSearch, } from 'react-icons/go';
import { HiMenu } from "react-icons/hi";
import { IoBagOutline } from "react-icons/io5";
import React from 'react';
// types
import type MenuSection from '@/types/MenuSection';

const sections: MenuSection[] = [
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
    },
    {
        name: "Promos",
        categories: []
    },
    {
        name: "New Arrivals",
        categories: []
    }
];

export default function Navbar() {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    return (
        <>
            <MobileMenu
                sections={sections}
                isOpen={mobileMenuOpen}
                setMobileMenuOpen={open => setMobileMenuOpen(open)} />
            <NavbarContent setMobileMenuOpen={open => setMobileMenuOpen(open)} />
        </>
    );
}

type SetMobileMenuOpen = React.Dispatch<React.SetStateAction<boolean>>;

const MobileMenuButton = ({ setMobileMenuOpen }: { setMobileMenuOpen: SetMobileMenuOpen }) => {
    return (
        <button
            onClick={() => setMobileMenuOpen(true)}
            className={styles.mobileMenuButton}
        >
            <HiMenu size={24} />
        </button>
    )
}

const NavbarContent = ({ setMobileMenuOpen }: { setMobileMenuOpen: SetMobileMenuOpen }) => {
    return (
        <header className={styles.navbar}>
            <div className={styles.leftContainer}>
                <MobileMenuButton setMobileMenuOpen={setMobileMenuOpen} />
                <Link href={"/"}>
                    <h2>CX</h2>
                </Link>
            </div>
            <nav className={styles.menuDesktop}>
                {sections.map((section, index) => (
                    <div key={index} className={styles.menuItem}>
                        <div className={styles.sectionTitle}>{section.name}</div>
                        <div className={styles.dropdownWrapper}>
                            <MenuDropdown section={section} />
                        </div>
                    </div>
                ))}
            </nav>
            <div className={styles.actions}>
                <Action actionType={ActionType.SEARCH} title='Search' />
                <Action actionType={ActionType.FAVORITES} title='Favorites' />
                <Action actionType={ActionType.CART} title='Cart' />
                <Action actionType={ActionType.PROFILE} title='Profile' />
            </div>
        </header>
    )
}

const MenuDropdown = ({ section }: { section: MenuSection }) => (
    <div className={styles.dropdown}>
        {section.categories.map((category, index) => (
            <a key={index} className={styles.category} href="#">{category}</a>
        ))}
    </div>
)

enum ActionType {
    SEARCH = 'search',
    FAVORITES = 'favorites',
    PROFILE = 'profile',
    CART = 'cart',
}

const Action = ({ actionType, title }: { actionType: ActionType, title: string }) => {

    const getIcon = (type: ActionType) => {
        switch (type) {
            case ActionType.SEARCH:
                return <GoSearch size={24} />;
            case ActionType.FAVORITES:
                return <GoHeart size={24} />;
            case ActionType.PROFILE:
                return <GoPerson size={24} />;
            case ActionType.CART:
                return <IoBagOutline size={24} />;
            default:
                return null;
        }
    }

    return (
        <div className={styles.action} title={title}>
            {getIcon(actionType)}
        </div>
    )
}
