import "./Card.scss";
import { ReactComponent as Save } from "../../assets/img/icon/favourite-card.svg";
// import favourite from "../../assets/img/icon/favourite-card.svg";
import Button from "../Button/Button";
import { isLiked } from "../../utils/products";

const Card = ({
  name,
  price,
  discount,
  wight,
  description,
  isFavorite,
  isCart,
  available,
  stock,
  pictures,
  tags,
  currentUser,
  onProductLike,
  likes,
  _id,
}) => {
  const liked = isLiked(likes, currentUser?._id);
  const handleLikeClick = () => {
    onProductLike({ _id, likes });
    console.log(_id, likes);
  };

  return (
    <div className="card d-fl-col">
      <span className={discount > 0 ? "card__discount" : "card__discount-none"}>
        -{discount}%
      </span>
      <div
        className={liked ? "card__favourite_is-active" : "card__favourite"}
        onClick={handleLikeClick}
      >
        <Save className="card__favourite-icon" />
      </div>

      <div className="card__img">
        <img src={pictures} alt="product" />
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
};
export default Card;
