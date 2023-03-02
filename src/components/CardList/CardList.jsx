import "./CardList.scss";
import Card from "../Card/Card";

const CardList = ({ cards, currentUser, onProductLike }) => {
  return (
    <div className="card__list">
      {cards.map((el) => {
        return (
          <Card
            key={el._id}
            {...el}
            onProductLike={onProductLike}
            currentUser={currentUser}
          />
        );
      })}
    </div>
  );
};
export default CardList;
