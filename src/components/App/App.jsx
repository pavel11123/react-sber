import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import Card from "../Card/Card";
import "./App.scss";

function App() {
  return (
    <>
      <Header>
        <Logo />
        <Search />
      </Header>
      <main className="main">
        <section className="section__product">
          <div className="card__container">
            <div className="card__list">
              <Card />
            </div>
          </div>
        </section>
      </main>
      <Footer>
        <Logo />
      </Footer>
    </>
  );
}

export default App;
