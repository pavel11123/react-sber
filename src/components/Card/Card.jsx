import "./Card.scss";
import product from "../../assets/img/photo/product.png";
import favourite from "../../assets/img/icon/favourite-card.svg";
import Button from "../Button/Button";

function Card() {
  return (
    <>
      <div className="card d-fl-col">
        <span className="card__discount">-14%</span>
        <div className="card__favourite">
          <img src={favourite} alt="favourite" />
        </div>

        <div className="card__img">
          <img src={product} alt="product" />
        </div>

        <div className="card__content">
          <div className="card__price d-fl-col">
            <span className="card__price-old">350 ₽</span>
            <span className="card__price-new">300 ₽</span>
          </div>
          <span className="card__quantity">1 шт</span>
          <h6 className="card__name">
            Рога оленя для собак весом до 3кг. Размер XS
          </h6>
        </div>

        <Button />
      </div>

      <div className="card d-fl-col">
        <span className="card__discount">-14%</span>
        <div className="card__favourite">
          <img src={favourite} alt="favourite" />
        </div>

        <div className="card__img">
          <img src={product} alt="product" />
        </div>

        <div className="card__content">
          <div className="card__price d-fl-col">
            <span className="card__price-old">350 ₽</span>
            <span className="card__price-new">300 ₽</span>
          </div>
          <span className="card__quantity">1 шт</span>
          <h6 className="card__name">
            Рога оленя для собак весом до 3кг. Размер XS
          </h6>
        </div>

        <Button />
      </div>

      <div className="card d-fl-col">
        <span className="card__discount">-14%</span>
        <div className="card__favourite">
          <img src={favourite} alt="favourite" />
        </div>

        <div className="card__img">
          <img src={product} alt="product" />
        </div>

        <div className="card__content">
          <div className="card__price d-fl-col">
            <span className="card__price-old">350 ₽</span>
            <span className="card__price-new">300 ₽</span>
          </div>
          <span className="card__quantity">1 шт</span>
          <h6 className="card__name">
            Рога оленя для собак весом до 3кг. Размер XS
          </h6>
        </div>

        <Button />
      </div>

      <div className="card d-fl-col">
        <span className="card__discount">-14%</span>
        <div className="card__favourite">
          <img src={favourite} alt="favourite" />
        </div>

        <div className="card__img">
          <img src={product} alt="product" />
        </div>

        <div className="card__content">
          <div className="card__price d-fl-col">
            <span className="card__price-old">350 ₽</span>
            <span className="card__price-new">300 ₽</span>
          </div>
          <span className="card__quantity">1 шт</span>
          <h6 className="card__name">
            Рога оленя для собак весом до 3кг. Размер XS
          </h6>
        </div>

        <Button />
      </div>

      <div className="card d-fl-col">
        <span className="card__discount">-14%</span>
        <div className="card__favourite">
          <img src={favourite} alt="favourite" />
        </div>

        <div className="card__img">
          <img src={product} alt="product" />
        </div>

        <div className="card__content">
          <div className="card__price d-fl-col">
            <span className="card__price-old">350 ₽</span>
            <span className="card__price-new">300 ₽</span>
          </div>
          <span className="card__quantity">1 шт</span>
          <h6 className="card__name">
            Рога оленя для собак весом до 3кг. Размер XS
          </h6>
        </div>

        <Button />
      </div>
    </>
  );
}
export default Card;
