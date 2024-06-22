import React from "react";
import { StyledFooter } from "./styled";
import Container from "../Container";
import { Link } from "gatsby";
import { routes } from "../../constants/routes";

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <div className="footerCustom">
          <div className="topFooter">
            <div className="logo">
              <Link className="logoLink" to={routes.HOME}>
                Flixnikbus
              </Link>
            </div>
            <div className="contactUs">
              <h3 className="contactUsTitle">Подзвони нам</h3>
              <ul className="contactUsList">
                <li className="contactUsItem">
                  <a
                    className="contactUsNumberLink"
                    href="tel:+38 (093) 351 8747"
                  >
                    +38 (093) 351 8747
                  </a>
                </li>
                <li className="contactUsItem">
                  <a
                    className="contactUsNumberLink"
                    href="tel:+38 (098) 558 9464"
                  >
                    +38 (098) 558 9464
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="bottomFooter">
            <span>Copyright © 2024 Flixnikbus | All Rights Reserved </span>
          </div>
        </div>
        <div className="divider"></div>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
