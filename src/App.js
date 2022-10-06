import Card from "./components/Card/Card";


function App() {
  return (
    <div className="wrapper">
      <div className="content" >
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
        <h1>Наушники</h1>
        <div className="cards">
          <Card img="img/1.jpg" name="Apple BYZ S852I" price="2927" rating="4.7" />
          <Card img="img/2.jpg" name="Apple EarPods" price="2327" rating="4.5" />
          <Card img="img/3.jpg" name="Apple EarPods" price="2327" rating="4.5" />
          <Card img="img/1.jpg" name="Apple BYZ S852I" price="2927" rating="4.7" />
          <Card img="img/2.jpg" name="Apple EarPods" price="2327" rating="4.5" />
          <Card img="img/3.jpg" name="Apple EarPods" price="2327" rating="4.5" />
        </div>
        <h1>Беспроводные наушники</h1>
        <div className="cards">
        <Card img="img/4.jpg" name="Apple AirPods" price="9527" rating="4.7" />
        <Card img="img/5.jpg" name="GERLAX GH-04" price="6527" rating="4.7" />
        <Card img="img/6.jpg" name="BOROFONE BO4" price="7527" rating="4.7" />
        </div>
      </div>
      <footer>

        <div className="footerLogo" >
          <p>QPICK</p>
        </div>

        <div className="footerLinks">
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

          <div className="footerLang">
            <div>
              <a href="#">Условия сервиса</a>
            </div>
            <div className="footerLang_icon">
              <img src="img/lang.svg" />
              <div className="footerLang_icon_mid">
                <a href="#">Рус</a>
              </div>
              <div>
                <a href="#">Eng</a>
              </div>
            </div>
          </div>
        </div>

        <div className="footerSocial">
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
    </div>
  );
}

export default App;
