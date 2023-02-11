import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import "./App.scss";

function App() {
  return (
    <>
      <Header>
        <Logo />
        <Search />
      </Header>
      <main className="main"></main>
      <Footer>
        <Logo />
      </Footer>
    </>
  );
}

export default App;
