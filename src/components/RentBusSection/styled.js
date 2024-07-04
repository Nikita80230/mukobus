import styled from "styled-components";

import backgroundImg from "../../assets/images/rentCarPageImg.png";
import rentBusImgMobileImg from "../../assets/images/rentBusImgMobileImg.png";

export const StyledRentBusSection = styled.section`
  background-image: url(${backgroundImg});
  background-position: top 27% right;
  background-repeat: no-repeat;

  min-height: 638px;

  padding-top: 120px;
  padding-bottom: 120px;

  .rentBusSection {
    max-width: 573px;
    width: 100%;
  }
  .rentBusTitle {
    margin-bottom: 34px;

    font-family: ${({ theme }) => theme.fonts.fontFamily};
    font-weight: 600;
    font-size: 48px;

    // line-height: 58px;
    line-height: 1.20833;
    color: ${({ theme }) => theme.colors.black};
  }
  .rentBusDescription {
    margin-bottom: 34px;

    font-family: ${({ theme }) => theme.fonts.fontFamily};
    font-weight: 500;
    font-size: 18px;

    // line-height: 28px;
    line-height: 1.55556;
    color: ${({ theme }) => theme.colors.black};
  }

  /* =======================================(max-width: 564px)========================================================= */

  @media (max-width: 564px) {
    background-image: url(${rentBusImgMobileImg});
    background-position: top 21% right;
    background-repeat: no-repeat;

    padding-top: 43px;
    padding-bottom: 43px;

    .rentBusSection {
      max-width: 573px;
      width: 100%;
    }
    .rentBusTitle {
      margin-bottom: 258px;

      font-weight: 600;
      font-size: 32px;
      line-height: 1.3125;
    }
    .rentBusDescription {
      margin-bottom: 34px;

      font-weight: 500;
      font-size: 18px;
      line-height: 1.33333;
    }
  }
`;
