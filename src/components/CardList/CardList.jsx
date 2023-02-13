import "./CardList.scss";
import Card from "../Card/Card";
import data from "../../assets/data.json";

const CardList = () => {
  //   console.log(data);

  return (
    <div className="card__list">
      {data.map((el) => {
        return <Card key={el.name} {...el} />;
      })}
    </div>
  );
};
export default CardList;
