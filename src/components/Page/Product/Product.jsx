import Footer from "../../Footer/Footer";
import { ReactComponent as Save } from "../../../assets/img/icon/favourite-card.svg";
import Header from "../../Header/Header";
import Logo from "../../Logo/Logo";
import Button from "../../Button/Button";
import s from "./Product.module.scss";
import { useEffect, useState } from "react";
import api from "../../../utils/api";
import star from "../../../assets/img/icon/star.svg";
import truck from "../../../assets/img/icon/truck.svg";
import quality from "../../../assets/img/icon/quality.svg";
import productImg from "../../../assets/img/photo/product1.png";
import request from "../../../assets/img/photo/request.png";
import cn from "classnames";

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
            <div className={cn(s.header, "d-fl-col")}>
              <a href="#">Назад</a>
              <h1 className={s.title}>Бублик из бычьего корня</h1>
              <div className={cn(s.header__info, "d-fl")}>
                <span className={s.header__article}>
                  Артикул: <span>2388907</span>
                </span>
                <div className="product__header-star">
                  <img src={star} alt="profile" />
                </div>
                <span className={s.header__request}>81 отзыв</span>
              </div>
            </div>

            <div className={cn(s.content, "d-fl-col")}>
              <div className={cn(s.content__card, "d-fl-wrap")}>
                <div className={s.content__cardImg}>
                  <img src={productImg} alt="productImg" />
                </div>

                <div className={cn(s.card__gallery, "d-fl-col")}>
                  <div className={s.content__galleryImg}>
                    <img src={productImg} alt="productImg" />
                  </div>
                </div>

                <div className={cn(s.card__info, "d-fl-col")}>
                  <div className={cn(s.card__price, "d-fl-col")}>
                    <span className={s.price__old}>550 ₽</span>
                    <span className={s.price__new}>495 ₽</span>
                  </div>

                  <div className={cn(s.info__btn, "d-fl")}>
                    <div className={cn(s.btn__qt, "d-fl")}>
                      <button className={s.btn__minus}>-</button>
                      <span className="product__card">0</span>
                      <button className={s.btn__plus}>+</button>
                    </div>
                    <Button className={s.pop} />
                  </div>

                  <div className={cn(s.favourite__wrapper, "d-fl")}>
                    <div className={s.favourite}>
                      <Save className={s.favourite__icon} />
                    </div>
                    <span className={s.favourite__title}>В избранное</span>
                  </div>

                  <div className={cn(s.card__quality, "d-fl-col")}>
                    <div className={cn(s.quality__card, "d-fl")}>
                      <div className={s.quality__img}>
                        <img src={truck} alt="profile" />
                      </div>
                      <div className={cn(s.quality__description, "d-fl-col")}>
                        <h5 className={s.quality__title}>
                          Доставка по всему Миру!
                        </h5>
                        <p className={s.quality__text}>
                          Доставка курьером — <span>от 399 ₽</span>
                        </p>
                        <p>
                          Доставка курьером — <span>от 399 ₽</span>
                        </p>
                      </div>
                    </div>
                    <div className={cn(s.quality__card, "d-fl")}>
                      <div className={s.quality__img}>
                        <img src={quality} alt="profile" />
                      </div>
                      <div className={cn(s.quality__description, "d-fl-col")}>
                        <h5 className={s.quality__title}>Гарантия качества</h5>
                        <p className={s.quality__text}>
                          Если Вам не понравилось качество нашей продукции, мы
                          вернем деньги, либо сделаем все возможное, чтобы
                          удовлетворить ваши нужды.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <article className={cn(s.description, "d-fl-col")}>
                <h3 className={s.subtitle}>Описание</h3>
                <p className={s.text}>
                  Бублик из бычьего корня-забавная, интересная, вкусная, а
                  главное полезная вкусняшка для вашего любимца. Неповторимый
                  вкус этого лакомства надолго отвлечет Вашего питомца от любых
                  дел.
                </p>
              </article>

              <article className={cn(s.characteristic, "d-fl-col")}>
                <h3 className={s.subtitle}>Характеристики</h3>
                <div className={cn(s.list__characteristic, "d-fl-col")}>
                  <div className={cn(s.list__item, "d-fl")}>
                    <span className={cn(s.item__title, "d-fl")}>Вес</span>
                    <p className={s.item__description}>1 шт 120-200 грамм</p>
                  </div>
                  <div className={cn(s.list__item, "d-fl")}>
                    <span className={cn(s.item__title, "d-fl")}>Цена</span>
                    <p className={s.item__description}>490 ₽ за 100 грамм</p>
                  </div>
                  <div className={cn(s.list__item, "d-fl")}>
                    <span className={cn(s.item__title, "d-fl")}>Польза</span>
                    <p className={s.item__description}>
                      Большое содержание аминокислот и микроэлементов оказывает
                      положительное воздействие на общий обмен веществ собаки.
                      <br />
                      <br />
                      Способствуют укреплению десен и жевательных мышц.
                      <br />
                      <br />
                      Развивают зубочелюстной аппарат, отвлекают собаку во время
                      смены зубов.
                      <br />
                      <br />
                      Имеет цельную волокнистую структуру, при разжевывание
                      получается эффект зубной щетки, лучше всего очищает клыки
                      собак.
                      <br />
                      <br />
                      Следует учесть высокую калорийность продукта.
                    </p>
                  </div>
                </div>
              </article>

              <article className={cn(s.request, "d-fl-col")}>
                <h3 className={s.subtitle}>Отзывы</h3>
                <button className={s.request__btn}>Написать отзыв</button>
                <h5 className={s.subtitle__request}>
                  Фотографии наших покупателей
                </h5>
                <div className={cn(s.request__gallery)}>
                  <div className={s.gallery__img}>
                    <img src={request} alt="productImg" />
                  </div>
                  <div className={s.gallery__img}>
                    <img src={request} alt="productImg" />
                  </div>
                  <div className={s.gallery__img}>
                    <img src={request} alt="productImg" />
                  </div>
                  <div className={s.gallery__img}>
                    <img src={request} alt="productImg" />
                  </div>
                  <div className={s.gallery__img}>
                    <img src={request} alt="productImg" />
                  </div>
                  <div className={s.gallery__img}>
                    <img src={request} alt="productImg" />
                  </div>
                  <div className={s.gallery__img}>
                    <img src={request} alt="productImg" />
                  </div>
                  <div className={s.gallery__img}>
                    <img src={request} alt="productImg" />
                  </div>
                  <div className={s.gallery__img}>
                    <img src={request} alt="productImg" />
                  </div>
                </div>

                <div className={cn(s.request__card, "d-fl-col")}>
                  <div className={cn(s.request__header, "d-fl-col")}>
                    <div className={cn(s.name, "d-fl")}>
                      <h5 className={s.request__title}>Анастасия</h5>
                      <span className={s.request__date}>08 июл 2021</span>
                    </div>
                    <div className={s.request__star}>
                      <img src={star} alt="profile" />
                    </div>
                    <span className={s.request__city}>Елизово</span>
                  </div>
                  <div className={s.request__text}>
                    «Вчера мы получили посылку с вкусняшками от @hordog.ru В
                    нашем наборе много разновидностей лакомств, в том числе рога
                    оленя, рубец говяжий, баранье легкое, нос говяжий, копыто
                    северного оленя, уши говяжьи, вымя говяжье, корень говяжий,
                    печенье с яблоком.Такого запаса нам точно хватит надолго.
                    <br />
                    <br />
                    Лайфун уже оценил вкусняшки! Спасибо за такой замечательный
                    набор!»
                  </div>
                </div>

                <div className={cn(s.request__card, "d-fl-col")}>
                  <div className={cn(s.request__header, "d-fl-col")}>
                    <div className={cn(s.name, "d-fl")}>
                      <h5 className={s.request__title}>Оксана</h5>
                      <span className={s.request__date}>12 авг 2021</span>
                    </div>
                    <div className={s.request__star}>
                      <img src={star} alt="profile" />
                    </div>
                    <span className={s.request__city}>
                      Йошкар-Ола, отзыв из инстгарам hordog.staya
                    </span>
                  </div>
                  <div className={s.request__text}>
                    «Ну и как уж без подарка ,для моей девочки))) Огромное
                    спасибо за вкусняхи @hordog.ru Одна упаковка чего стоит а уж
                    то что было внутри вызвало полных восторг у нашей девочки.
                    Что приятно удивило что при покупке у них в магазине сделали
                    скидку))) И положили презент»
                  </div>
                </div>
              </article>
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
