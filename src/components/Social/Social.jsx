import "./Social.scss";
import telegramLogo from "../../assets/img/icon/logo-telegram.svg";
import whatsappLogo from "../../assets/img/icon/logo-whatsapp.svg";
import viberLogo from "../../assets/img/icon/logo-viber.svg";
import instagramLogo from "../../assets/img/icon/logo-instagram.svg";
import vkLogo from "../../assets/img/icon/logo-vk.svg";

function Social() {
  return (
    <div className="society__block d-fl-wrap">
      <div className="society__block-img">
        <img src={telegramLogo} alt="telegramLogo" />
      </div>
      <div className="society__block-img">
        <img src={whatsappLogo} alt="whatsapp" />
      </div>
      <div className="society__block-img">
        <img src={viberLogo} alt="viberLogo" />
      </div>
      <div className="society__block-img">
        <img src={instagramLogo} alt="instagramLogo" />
      </div>
      <div className="society__block-img">
        <img src={vkLogo} alt="vkLogo" />
      </div>
    </div>
  );
}

export default Social;
