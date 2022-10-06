import styles from "./Footer.module.scss";

function Footer() {
    return (
        <footer>

            <div className={styles.footerLogo} >
                <p>QPICK</p>
            </div>

            <div className={styles.footerLinks}>
                <div>
                    <p>
                        <a href="#">Избранное</a>
                    </p>
                    <p>
                        <a href="#">Корзина</a>
                    </p>
                    <p>
                        <a href="#">Контакты</a>
                    </p>
                </div>

                <div className={styles.footerLang}>
                    <div>
                        <a href="#">Условия сервиса</a>
                    </div>
                    <div className={styles.footerLang_icon}>
                        <img src="img/lang.svg" />
                        <div className={styles.footerLang_icon_mid}>
                            <a href="#">Рус</a>
                        </div>
                        <div>
                            <a href="#">Eng</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.footerSocial}>
                <ul>
                    <li>
                        <img src="img/VK.svg" />
                    </li>
                    <li>
                        <img src="img/Telegram.svg" />
                    </li>
                    <li>
                        <img src="img/Whatsapp.svg" />
                    </li>
                </ul>
            </div>

        </footer>
    );
}

export default Footer;