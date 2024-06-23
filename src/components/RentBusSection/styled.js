import styled from "styled-components";

import backgroundImg from "../../assets/images/rentCarPageImg.png";

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
`;
