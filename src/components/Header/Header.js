import styles from "./Header.module.scss";

function Header() {
    return (
        <header>
            <div className={styles.headerLeft}>
                <a href="/">
                    <p>QPICK</p>
                </a>
            </div>
            <ul className={styles.headerRight}>
                <li>
                    <img width={22} height={20} src="img/fav.svg" />
                </li>
                <li>
                    <a href="/cart">
                        <img width={22} height={20} src="img/cart.svg" />
                    </a>
                </li>
            </ul>
        </header>
    );
}

export default Header;