import React from "react";
import { StyledHeader } from "./styled";
import { Link } from "gatsby";
import { routes } from "../../constants/routes";
import Container from "../Container";

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <div className="header">
          <div className="logo">
            <Link className="logoLink" to={routes.HOME}>
              Flixnikbus
            </Link>
          </div>
          <nav className="navigation">
            <Link className="navigationLink" to={routes.HOME}>
              Головна
            </Link>
            <Link className="navigationLink" to={`${routes.HOME}#about`}>
              Про нас
            </Link>
            <Link className="navigationLink" to={routes.RENT}>
              Оренда авто
            </Link>
            <Link className="navigationLink" to={routes.ROUTES}>
              Маршрути
            </Link>
            <Link className="navigationLink" to={routes.DELIVERY}>
              Посилки
            </Link>
            <Link className="navigationLink" to={`${routes.HOME}#contacts`}>
              Контакти
            </Link>
          </nav>
        </div>
      </Container>
    </StyledHeader>
  );
};

export default Header;
