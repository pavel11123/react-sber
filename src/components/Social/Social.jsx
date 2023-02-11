import "./Social.scss";
import telegramLogo from "../../assets/img/icon/logo-telegram.svg";

function Social() {
  return (
    <div className="society__block d-fl-wrap">
      <div className="society__block-img">
        <img src={telegramLogo} alt="" />
      </div>
      <div className="society__block-img">
        <img src={telegramLogo} alt="" />
      </div>
      <div className="society__block-img">
        <img src={telegramLogo} alt="" />
      </div>
      <div className="society__block-img">
        <img src={telegramLogo} alt="" />
      </div>
      <div className="society__block-img">
        <img src={telegramLogo} alt="" />
      </div>
    </div>
  );
}

export default Social;
