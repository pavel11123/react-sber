import "./Search.scss";
import searchBtn from "../../assets/img/icon/search.svg";

function Search() {
  return (
    <form className="search__form d-fl">
      <input type="text" placeholder="Поиск" className="search__input" />
      <button className="search__btn">
        <img src={searchBtn} alt="search Button" />
      </button>
    </form>
  );
}

export default Search;
