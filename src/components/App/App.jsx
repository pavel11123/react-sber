import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import "./App.scss";

function App() {
  return (
    <div className="wrapper">
      <Header>
        <Logo />
        <Search />
      </Header>
      <main className="main"></main>
      <Footer />
    </div>
  );
}

export default App;
