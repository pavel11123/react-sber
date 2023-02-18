import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import CardList from "../CardList/CardList";
import "./App.scss";
import { useEffect, useState } from "react";
import data from "../../assets/data.json";

function App() {
  const [cards, setCards] = useState(data);
  const [searchQuery, setsearchQuery] = useState("");

  useEffect(() => {
    handleRequest();
  }, [searchQuery]);

  function handleRequest() {
    const filterCard = data.filter((item) =>
      item.name.toUpperCase().includes(searchQuery.toUpperCase())
    );
    setCards(filterCard);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    handleRequest();
  }

  console.log(searchQuery);

  const handleInputChange = (inputValue) => {
    setsearchQuery(inputValue);
  };

  return (
    <>
      <Header>
        <Logo />
        <Search onIunput={handleInputChange} onSubmit={handleFormSubmit} />
      </Header>
      <main className="main">
        <section className="section__product">
          <div className="product__container">
            <CardList cards={cards} />
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
