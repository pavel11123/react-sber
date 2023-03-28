import { Route, Routes } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import SearchInfo from "../SearchInfo/SearchInfo";
import { isLiked } from "../../utils/products";
import "./App.scss";
import { useEffect, useState } from "react";
import api from "../../utils/api";
import useDebounce from "../../hooks/useDebounce";
import CatalogPage from "../Page/CatalogPage/CatalogPage";
import ProductPage from "../Page/ProductPage/ProductPage";
import NotFoundPage from "../Page/NotFoundPage/NotFoundPage";
import { UserContext } from "../../context/userContext";

function App() {
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
    <UserContext.Provider value={{ user: currentUser, isLoading }}>
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

        <Routes>
          <Route
            path="/"
            element={
              <CatalogPage
                isLoading={isLoading}
                handleProductLike={handleProductLike}
                currentUser={currentUser}
                cards={cards}
              />
            }
          />
          <Route path="/product/:productId" element={<ProductPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <Footer>
        <Logo />
      </Footer>
    </UserContext.Provider>
  );
}

export default App;
