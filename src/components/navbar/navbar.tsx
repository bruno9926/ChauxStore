import styles from './navbar.module.scss';
// icons
import { GoHeart, GoPerson, GoSearch,  } from 'react-icons/go';
import { IoBagOutline } from "react-icons/io5";

export default function Navbar() {
  return (
    <header className={styles.navbar}>
        <h2>CX</h2>
        <nav className={styles.menu}>
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
