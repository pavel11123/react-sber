import "./Header.scss";

function Header({ children }) {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__wrapper d-fl">{children}</div>
      </div>
    </header>
  );
}

export default Header;
