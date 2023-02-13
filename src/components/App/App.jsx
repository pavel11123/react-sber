import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import CardList from "../CardList/CardList";
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
          <div className="product__container">
            <CardList />
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
