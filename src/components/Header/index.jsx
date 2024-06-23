import React from "react";
import { StyledHeader } from "./styled";
import { Link } from "gatsby";
import { routes } from "../../constants/routes";
import Container from "../Container";

const appRoutes = [
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

const Header = ({ isLightTheme, pathname }) => {
  // +`${pathname === route.pageUrl + "/" ? "active" : ""}`;
  const fixedPathname = pathname.sp;

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
            {/* <Link className="navigationLink" to={routes.HOME}>
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
            </Link> */}
          </nav>
        </div>
      </Container>
    </StyledHeader>
  );
};

export default Header;
