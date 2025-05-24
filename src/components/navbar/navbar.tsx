import styles from './navbar.module.scss';
// icons
import { GoHeart, GoPerson, GoSearch,  } from 'react-icons/go';
import { HiMenu } from "react-icons/hi";
import { IoBagOutline } from "react-icons/io5";

export default function Navbar() {
  return (
    <header className={styles.navbar}>
        <div className={styles.leftContainer}>
            <MobileMenuButton />
            <h2>CX</h2>
        </div>
        <nav className={styles.menuDesktop}>
            <a href="#">Men</a>
            <a href="#">Women</a>
            <a href="#">News</a>
            <a href="#">Offers</a>
        </nav>
        <div className={styles.actions}>
            <Action actionType={ActionType.SEARCH} title='Search' />
            <Action actionType={ActionType.FAVORITES} title='Favorites' />
            <Action actionType={ActionType.CART} title='Cart' />
            <Action actionType={ActionType.PROFILE} title='Profile' />
        </div>
    </header>
  );
}

const MobileMenuButton = () => {
    return (
        <button className={styles.mobileMenuButton}>
            <HiMenu size={24}/>
        </button>
    )
}

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
