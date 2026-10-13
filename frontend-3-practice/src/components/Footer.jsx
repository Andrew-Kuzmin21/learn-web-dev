export default function Footer() {
  return (
    <footer>
      <div className="footer__main">
        <div className="footer__main__content">
          <div className="footer__main__content__col">
            <a href="#" className="footer__main__content__col__logo">
              <img className="footer__main__content__col__logo__img" src="/img/logo.png" alt="logo" />
            </a>

            <p className="footer__main__content__col__text">
              Подберём стрижку и уход, которые подойдут именно вам.
              Расслабляйтесь, общайтесь и наслаждайтесь результатом!
            </p>
          </div>

          <div className="footer__main__content__col">
            <h5 className="footer__main__content__col__title">КОНТАКТЫ</h5>

            <div className="footer__main__content__col__contact">
              <img className="footer__main__content__col__contact__img" src="/img/map-pin.png" alt="" />
              <p className="footer__main__content__col__contact__text">ул. Садовая, 15, Москва</p>
            </div>

            <div className="footer__main__content__col__contact">
              <img className="footer__main__content__col__contact__img" src="/img/phone.png" alt="" />
              <p className="footer__main__content__col__contact__phone">+7 (495) 123-45-67</p>
            </div>
          </div>

          <div className="footer__main__content__col">
            <h5 className="footer__main__content__col__title">РЕЖИМ РАБОТЫ</h5>

            <div className="footer__main__content__col__text">
              <p className="footer__main__content__col__text__days">Пн–Пт: 9:00 – 21:00</p>
              <p className="footer__main__content__col__text__days">Сб–Вс: 10:00 – 19:00</p>
            </div>
          </div>
        </div>

        <div className="footer__main__bottom">
          <p className="footer__main__bottom__text">© 2026. Все права защищены.</p>
          <a className="footer__main__bottom__text footer__main__bottom__text__line" href="#">
            Политика конфиденциальности
          </a>
        </div>
      </div>
    </footer>
  );
}
