import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import CardList from "../CardList/CardList";
import SearchInfo from "../SearchInfo/SearchInfo";
import { isLiked } from "../../utils/products";
import "./App.scss";
import { useEffect, useState } from "react";
// import data from "../../assets/data.json";
import api from "../../utils/api";
import useDebounce from "../../hooks/useDebounce";
import Spinner from "../Spinner/Spinner";

function App() {
  // const [cards, setCards] = useState(data);
  const [cards, setCards] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [searchQuery, setsearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const debouncesearchQuery = useDebounce(searchQuery, 300);

  useEffect(() => {
    setIsLoading(true);
    Promise.all([api.getUserInfo(), api.getProductList()])
      .then(([userData, cardData]) => {
        setCurrentUser(userData);
        setCards(cardData.products);
      })
      .catch((err) => console.error(err))
      .finally(() => {
        setIsLoading(false);
      });
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

  const handleInputChange = (inputValue) => {
    setsearchQuery(inputValue);
  };

  const handleUpdateUser = (userUpdate) => {
    api.setUserInfo(userUpdate).then((newUserData) => {
      setCurrentUser(newUserData);
    });
  };

  const handleProductLike = (product) => {
    // console.log(product);
    const liked = isLiked(product.likes, currentUser._id);
    api.changeLikeProduct(product._id, liked).then((newCard) => {
      const newCards = cards.map((card) => {
        return card._id === newCard._id ? newCard : card;
      });
      setCards(newCards);
    });
  };

  return (
    <>
      <Header user={currentUser} updateUserHandle={handleUpdateUser}>
        <Logo />
        <Search onIunput={handleInputChange} onSubmit={handleFormSubmit} />
      </Header>
      <main className="main d-fl-col">
        <section className="section__search-info">
          <div className="search-info__container">
            <SearchInfo searchText={searchQuery} searchCount={cards.length} />
          </div>
        </section>

        <section className="section__product d-fl-col">
          <div className="product__container d-fl-col">
            {isLoading ? (
              <Spinner />
            ) : (
              <CardList
                cards={cards}
                onProductLike={handleProductLike}
                currentUser={currentUser}
              />
            )}
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
