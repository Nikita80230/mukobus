import React, { useEffect, useState } from "react";
import { Location } from "@reach/router";

import Header from "../Header";
import Footer from "../Footer";
import { StyledPageLayout } from "./styled";
// import GlobalStyle from "../../assets/styles/globalStyles";

import "../../assets/styles/global.css";
import SEO from "../SEO";

const PageLayout = ({ children, location, description, title }) => {
  const [isLightTheme, setIsLightTheme] = useState(false);
  console.log("location-->", location);
  useEffect(() => {
    switch (location.pathname) {
      case "/rent/":
      case "/delivery/":
        document.body.className = "light";
        setIsLightTheme(true);

        break;

      default:
        document.body.className = "dark";
        setIsLightTheme(false);
    }
  }, [location]);

  return (
    <>
      {/* <GlobalStyle /> */}
      <StyledPageLayout>
        <SEO description={description} title={title} />
        <Header isLightTheme={isLightTheme} pathname={location.pathname} />
        <main>{children}</main>
        <Footer />
      </StyledPageLayout>
    </>
  );
};

const WithLocationLayout = (props) => (
  <Location>
    {({ location }) => <PageLayout {...props} location={location} />}
  </Location>
);

export default WithLocationLayout;
