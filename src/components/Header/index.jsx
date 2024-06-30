import React, { useEffect, useState } from "react";
import { StyledHeader } from "./styled";
import { Link } from "gatsby";
import { routes } from "../../constants/routes";
import Container from "../Container";

import OpenBurgerMenuIcon from "../../assets/images/openBurgerMenuButton.inline.svg";
import CloseBurgerMenuIcon from "../../assets/images/closeBurgerMenuIcon.inline.svg";
import BurgerMenu from "../BurgerMenu";

export const appRoutes = [
  {
    pageUrl: routes.HOME,
    pageName: "Головна",
  },
  {
    pageUrl: `${routes.HOME}#about`,
    pageName: "Про нас",
  },
  {
    pageUrl: routes.RENT,
    pageName: "Оренда авто",
  },
  {
    pageUrl: routes.ROUTES,
    pageName: "Маршрути",
  },
  {
    pageUrl: routes.DELIVERY,
    pageName: "Посилки",
  },
  {
    pageUrl: `${routes.HOME}#contacts`,
    pageName: "Контакти",
  },
];

const Header = ({ isLightTheme }) => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  useEffect(() => {
    if (isBurgerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isBurgerOpen]);

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
            {appRoutes.map((route) => {
              return (
                <Link
                  activeClassName="active"
                  className={`navigationLink ${
                    isLightTheme ? "lightTheme" : "darkTheme"
                  } `}
                  to={route.pageUrl}
                  key={route.pageName}
                >
                  {route.pageName}
                </Link>
              );
            })}
          </nav>
          <button
            className="burgerMenuBtn"
            type="button"
            onClick={() => setIsBurgerOpen(!isBurgerOpen)}
          >
            {isBurgerOpen ? <CloseBurgerMenuIcon /> : <OpenBurgerMenuIcon />}
          </button>
          {isBurgerOpen && <BurgerMenu isLightTheme={isLightTheme} />}
        </div>
      </Container>
    </StyledHeader>
  );
};

export default Header;
