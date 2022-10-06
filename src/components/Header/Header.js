import styles from "./Header.module.scss";

function Header() {
    return (
        <header>
            <div className={styles.headerLeft}>
                <p>QPICK</p>
            </div>
            <ul className={styles.headerRight}>
                <li>
                    <img width={22} height={20} src="img/fav.svg" />
                </li>
                <li>
                    <img width={22} height={20} src="img/cart.svg" />
                </li>
            </ul>
        </header>
    );
}

export default Header;