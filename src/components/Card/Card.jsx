import "./Card.scss";
import favourite from "../../assets/img/icon/favourite-card.svg";
import Button from "../Button/Button";

function Card({
  name,
  price,
  discount,
  wight,
  description,
  isFavorite,
  isCart,
  available,
  stock,
  picture,
  tags,
}) {
  return (
    <div className="card d-fl-col">
      <span className={discount > 0 ? "card__discount" : "card__discount-none"}>
        -{discount}%
      </span>
      <div className="card__favourite">
        <img src={favourite} alt="favourite" />
      </div>

      <div className="card__img">
        <img src={picture} alt="product" />
      </div>

      <div className="card__content">
        <div className="card__price d-fl-col">
          <span className="card__price-old">{price} ₽</span>
          <span className="card__price-new">
            {price - (discount / 100) * price} ₽
          </span>
        </div>
        <span className="card__quantity">{stock} шт</span>
        <h6 className="card__name">{name}</h6>
      </div>

      <Button />
    </div>
  );
}
export default Card;
