import s from "./SearchInfo.module.scss";

const SearchInfo = ({ searchText, searchCount }) => {
  return (
    searchText && (
      <span>
        По запросу {searchText} найдено {searchCount} товаров
      </span>
    )
  );
};
export default SearchInfo;
