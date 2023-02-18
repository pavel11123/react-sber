import "./Search.scss";
import searchBtn from "../../assets/img/icon/search.svg";

function Search({ onSubmit: propsOnSubmit, onIunput }) {
  const handleInput = (e) => {
    onIunput(e.target.value);
  };

  return (
    <form className="search__form d-fl" onSubmit={propsOnSubmit}>
      <input
        type="text"
        placeholder="Поиск"
        className="search__input"
        onInput={handleInput}
      />
      <button className="search__btn">
        <img src={searchBtn} alt="search Button" />
      </button>
    </form>
  );
}

export default Search;
