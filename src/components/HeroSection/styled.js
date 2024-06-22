import styled from "styled-components";

import heroImg from "../../assets/images/hero-img.png";

export const StyledHeroSection = styled.section`
  background-image: url(${heroImg});
  background-position: top 27% right;
  background-repeat: no-repeat;

  min-height: 534px;

  padding-top: 70px;
  padding-bottom: 70px;

  .leftColumn {
    max-width: 848px;
    width: 100%;
  }
  .heroTitle {
    margin-bottom: 34px;

    font-family: inherit;
    font-weight: 600;
    font-size: 58px;
    line-height: 1.2069;

    color: #f9f9f9;
  }

  .heroText {
    margin-bottom: 92px;

    font-family: inherit;
    font-weight: 600;
    font-size: 24px;
    // line-height: 28px;
    line-height: 1.16667;

    color: #f9f9f9;
  }
  .heroBtn {
    width: 289px;
    padding: 24px 56px;
    height: 76px;
    border-radius: 16px;

    background: #e8bf00;

    font-family: "Montserrat";
    font-weight: 600;
    font-size: 24px;

    line-height: 1.16667;
    color: #322a1e;
  }
  .heroImg {
    position: absolute;
    right: 0;
    top: 128px;
    z-index: 0;
  }
`;
