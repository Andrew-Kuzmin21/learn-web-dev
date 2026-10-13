const NAV_LINKS = ['Услуги', 'Галерея', 'Команда', 'Отзывы', 'Контакты'];

export default function Header() {
  return (
    <header className="header">
      <a href="#" className="header__logo">
        <img className="header__logo__img" src="/img/logo.png" alt="logo" />
      </a>

      <nav className="header__nav">
        {NAV_LINKS.map((link) => (
          <a key={link} href="#" className="header__nav__link">{link}</a>
        ))}
      </nav>
    </header>
  );
}
