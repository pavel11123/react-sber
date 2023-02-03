import "./Search.scss";

function Search() {
  return (
    <form className="search__form d-fl">
      <input type="text" placeholder="Поиск" className="search__input" />
      <button className="search__btn">click</button>
    </form>
  );
}

export default Search;
