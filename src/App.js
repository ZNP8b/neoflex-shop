import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="wrapper">
      <div className="content" >
        <Header />
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
      <Footer />
    </div>
  );
}

export default App;
