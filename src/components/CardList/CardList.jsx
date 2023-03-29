import "./CardList.scss";
import Card from "../Card/Card";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { CardContext } from "../../context/cardContext";
import NotFound from "../NotFound/NotFound";

const CardList = () => {
  const { user: currentUser, isLoading } = useContext(UserContext);
  const { cards, handleLike } = useContext(CardContext);

  return (
    <>
      {!cards.length && !isLoading ? <NotFound /> : null}
      <div className="card__list">
        {cards.map((el) => {
          return (
            <Card
              key={el._id}
              {...el}
              onProductLike={handleLike}
              currentUser={currentUser}
            />
          );
        })}
      </div>
    </>
  );
};
export default CardList;
