import "./CardList.scss";
import Card from "../Card/Card";

const CardList = ({ cards }) => {
  return (
    <div className="card__list">
      {cards.map((el) => {
        return <Card key={el._id} {...el} />;
      })}
    </div>
  );
};
export default CardList;
