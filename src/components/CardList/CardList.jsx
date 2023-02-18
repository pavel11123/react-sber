import "./CardList.scss";
import Card from "../Card/Card";

const CardList = ({ cards }) => {
  return (
    <div className="card__list">
      {cards.map((el) => {
        return <Card key={el.name} {...el} />;
      })}
    </div>
  );
};
export default CardList;
