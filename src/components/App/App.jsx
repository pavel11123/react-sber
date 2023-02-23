import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import CardList from "../CardList/CardList";
import SearchInfo from "../SearchInfo/SearchInfo";
import "./App.scss";
import { useEffect, useState } from "react";
// import data from "../../assets/data.json";
import api from "../../utils/api";
import useDebounce from "../../hooks/useDebounce";

function App() {
  // const [cards, setCards] = useState(data);
  const [cards, setCards] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [searchQuery, setsearchQuery] = useState("");
  const debouncesearchQuery = useDebounce(searchQuery, 300);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getProductList()])
      .then(([userData, cardData]) => {
        setCurrentUser(userData);
        setCards(cardData.products);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    handleRequest();
  }, [debouncesearchQuery]);

  // handleRequest - функция для поиска карточек
  const handleRequest = () => {
    api
      .search(debouncesearchQuery)
      .then((data) => {
        setCards(data);
      })
      //делаем проверку
      .catch((err) => console.error(err));
  };

  // функция для поиска по кнопке
  function handleFormSubmit(e) {
    e.preventDefault();
    handleRequest();
  }

  console.log(searchQuery);

  const handleInputChange = (inputValue) => {
    setsearchQuery(inputValue);
  };

  const handleUpdateUser = (userUpdate) => {
    api.setUserInfo(userUpdate).then((newUserData) => {
      setCurrentUser(newUserData);
    });
  };

  return (
    <>
      <Header user={currentUser} updateUserHandle={handleUpdateUser}>
        <Logo />
        <Search onIunput={handleInputChange} onSubmit={handleFormSubmit} />
      </Header>
      <main className="main">
        <section className="section__search-info">
          <div className="search-info__container">
            <SearchInfo searchText={searchQuery} searchCount={cards.length} />
          </div>
        </section>

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
