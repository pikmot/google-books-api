import { Link, NavLink } from "react-router";

import navigationClasses from "./NavigationBar.module.scss";

import bookImage from "../../assets/icons/book-solid-full.svg";

export default function NavigationBar() {
  return (
    <nav className={navigationClasses.nav}>
      <div className={navigationClasses.nav__other}>
        <img className={navigationClasses.nav__other__img} src={bookImage} />
      </div>

      <NavLink to="/" className={navigationClasses.nav__link}>
        HOME
      </NavLink>
      <NavLink to="/about" className={navigationClasses.nav__link}>
        ABOUT
      </NavLink>
    </nav>
  );
}
