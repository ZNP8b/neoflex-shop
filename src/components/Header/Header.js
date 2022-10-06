
function Header() {
    return (
        <header>
            <div className="headerLeft">
                <p>QPICK</p>
            </div>
            <ul className="headerRight">
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