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
                MukoBus
              </Link>
            </div>
            <div className="contactUs">
              <h3 className="contactUsTitle">Подзвони нам</h3>
              <ul className="contactUsList">
                <li className="contactUsItem">
                  <a className="contactUsNumberLink" href="tel:+380960840062">
                    +38 (096) 084 0062
                  </a>
                </li>
                <li className="contactUsItem">
                  <a className="contactUsNumberLink" href="tel:+380985589464">
                    +38 (098) 558 9464
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="bottomFooter">
            <span className="bottomFooterSpan">
              Copyright © 2024 MukoBus | All Rights Reserved{" "}
            </span>
          </div>
        </div>
        <div className="divider"></div>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
