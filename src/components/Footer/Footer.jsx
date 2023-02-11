import "./Footer.scss";

import Social from "../Social/Social";

function Footer({ children }) {
  return (
    <header className="footer">
      <div className="footer__container">
        <div className="footer__wrapper d-fl-wrap">
          <div className="footer__block-logo">{children}</div>
          <div className="footer__block-list">
            <nav className="footer__block-nav d-fl-wrap">
              <ul className="footer__nav-list">
                <li className="footer__nav-item d-fl-col">
                  <a href="#" className="footer__nav-link">
                    Каталог
                  </a>
                  <a href="#" className="footer__nav-link">
                    Акции
                  </a>
                  <a href="#" className="footer__nav-link">
                    Новости
                  </a>
                  <a href="#" className="footer__nav-link">
                    Отзывы
                  </a>
                </li>
              </ul>
              <ul className="footer__nav-list ">
                <li className="footer__nav-item d-fl-col">
                  <a href="#" className="footer__nav-link">
                    Оплата и доставка
                  </a>
                  <a href="#" className="footer__nav-link">
                    Часто спрашивают
                  </a>
                  <a href="#" className="footer__nav-link">
                    Обратная связь
                  </a>
                  <a href="#" className="footer__nav-link">
                    Контакты
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="footer__block-info d-fl-col">
            <h5 className="footer__block-info--title">Мы на связи</h5>
            <span className="footer__block-info--phone">8 (999) 00-00-00</span>
            <span className="footer__block-info--email">
              dogfood.ru@gmail.com
            </span>
            <Social />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Footer;
