import "./Header.scss";
import favourite from "../../assets/img/icon/favourite.svg";
import cart from "../../assets/img/icon/cart.svg";
import profile from "../../assets/img/icon/profile.svg";

function Header({ user, updateUserHandle, children }) {
  const handleClickButtonEdit = (e) => {
    e.preventDefault();
    updateUserHandle({ name: "Pavel Korobko", about: "programmer" });
  };

  return (
    <header className="header">
      <div className="header__container">
        {/* user?.name делаем проверку тоже самое что и user !== null, && - тоже самое что тернарный оператор*/}
        {/* {user?.name && <span>{user?.name}</span>}
        {user?.email && <span>{user?.email}</span>}

        <button onClick={handleClickButtonEdit}>Изменить</button> */}
        <div className="header__wrapper d-fl">
          {children}
          <div className="header__icon d-fl">
            <div className="icon__img">
              <img src={favourite} alt="favourite" />
            </div>
            <div className="icon__img">
              <img src={cart} alt="cart" />
            </div>
            <div className="icon__img">
              <img src={profile} alt="profile" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
