import Footer from "../../Footer/Footer";
import { ReactComponent as Save } from "../../../assets/img/icon/favourite-card.svg";
import Header from "../../Header/Header";
import Logo from "../../Logo/Logo";
import Button from "../../Button/Button";
import "./Product.scss";
import { useEffect, useState } from "react";
import api from "../../../utils/api";
import star from "../../../assets/img/icon/star.svg";
import truck from "../../../assets/img/icon/truck.svg";
import quality from "../../../assets/img/icon/quality.svg";
import productImg from "../../../assets/img/photo/product1.png";

function Product() {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleUpdateUser = (userUpdate) => {
    api.setUserInfo(userUpdate).then((newUserData) => {
      setCurrentUser(newUserData);
    });
  };

  return (
    <>
      <Header user={currentUser} updateUserHandle={handleUpdateUser}>
        <Logo />
      </Header>
      <main className="main d-fl-col">
        <section className="d-fl section__product">
          <div className="product__container">
            <div className="product__header d-fl-col">
              <a href="#" className="product__link-back">
                Назад
              </a>
              <h1 className="product__title">Бублик из бычьего корня</h1>
              <div className="product__header-info d-fl">
                <span className="product__header-article">
                  Артикул: <span>2388907</span>
                </span>
                <div className="product__header-star">
                  <img src={star} alt="profile" />
                </div>
                <span className="header__request">81 отзыв</span>
              </div>
            </div>

            <div className="product__content d-fl-col">
              <div className="product__content-card d-fl-wrap">
                <div className="product__content-card--img">
                  <img src={productImg} alt="productImg" />
                </div>

                <div className="product__card-gallery d-fl-col">
                  <div className="product__content-gallery--img">
                    <img src={productImg} alt="productImg" />
                  </div>
                </div>

                <div className="product__content-card--info d-fl-col">
                  <div className="product__card--info d-fl-col">
                    <span className="product__card-price--old">550 ₽</span>
                    <span className="product__card-price--new">495 ₽</span>
                  </div>

                  <div className="product__card--info-btn d-fl">
                    <div className="product__card-btn--qt d-fl">
                      <button className="product__card-btn--minus">-</button>
                      <span className="product__card">0</span>
                      <button className="product__card-btn--plus">+</button>
                    </div>
                    <Button />
                  </div>

                  <div className="product__favourite-wrapper d-fl">
                    <div className="product__favourite ">
                      <Save className="card__favourite-icon" />
                    </div>
                    <span className="product__favourite-text">В избранное</span>
                  </div>

                  <div className="product__content-card--quality d-fl-col">
                    <div className="product__content-quality-card d-fl">
                      <div className="product__quality-img">
                        <img src={truck} alt="profile" />
                      </div>
                      <div className="product__quality-description d-fl-col">
                        <h5 className="product__quality-title">
                          Доставка по всему Миру!
                        </h5>
                        <p className="product__quality-text">
                          Доставка курьером — <span>от 399 ₽</span>
                        </p>
                        <p>
                          Доставка курьером — <span>от 399 ₽</span>
                        </p>
                      </div>
                    </div>
                    <div className="product__content-quality-card d-fl">
                      <div className="product__quality-img">
                        <img src={quality} alt="profile" />
                      </div>
                      <div className="product__quality-description d-fl-col">
                        <h5 className="product__quality-title">
                          Гарантия качества
                        </h5>
                        <p className="product__quality-text">
                          Если Вам не понравилось качество нашей продукции, мы
                          вернем деньги, либо сделаем все возможное, чтобы
                          удовлетворить ваши нужды.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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

export default Product;
