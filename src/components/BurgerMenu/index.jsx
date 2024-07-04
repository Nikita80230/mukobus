import React from "react";
import { StyledBurgerMenu } from "./styled";
import { appRoutes } from "../Header";
import { Link } from "gatsby";

const BurgerMenu = ({ isLightTheme, handleToggleBurger }) => {
  return (
    <StyledBurgerMenu
      className={`burgerMenu ${isLightTheme ? "lightTheme" : "darkTheme"} `}
    >
      <nav className="burgerMenuNavigation">
        {appRoutes.map((route) => {
          return (
            <Link
              activeClassName="active"
              className={`burgerMenuNavigationLink ${
                isLightTheme ? "lightTheme" : "darkTheme"
              } `}
              to={route.pageUrl}
              key={route.pageName}
              onClick={handleToggleBurger}
            >
              {route.pageName}
            </Link>
          );
        })}
      </nav>
    </StyledBurgerMenu>
  );
};

export default BurgerMenu;
