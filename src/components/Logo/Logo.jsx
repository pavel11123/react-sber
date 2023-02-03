import "./Logo.scss";
import logoSrc from "../../assets/img/icon/logoDog.svg";

function Logo() {
  return (
    <>
      <a href="/">
        <img src={logoSrc} alt="Логотип" />
      </a>
    </>
  );
}
export default Logo;
