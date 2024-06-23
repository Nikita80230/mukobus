import styled from "styled-components";

import routesSectionImg from "../../assets/images/routesPageSectionImg.png";

export const StyledRoutesSection = styled.section`
  background-image: url(${routesSectionImg});
  background-position: top 50% right 8%;
  background-repeat: no-repeat;

  .routesSection {
    height: 520px;

    padding-top: 120px;
    padding-bottom: 120px;
  }

  .routesSectionTitle {
    margin-bottom: 33px;

    font-family: ${({ theme }) => theme.fonts.fontFamily};
    font-weight: 600;
    font-size: 48px;

    // line-height: 58px;
    line-height: 1.20833;
    color: ${({ theme }) => theme.colors.white};
  }
  .routesSectionSubtitle {
    display: inline-block;
    margin-bottom: 33px;

    font-family: ${({ theme }) => theme.fonts.fontFamily};
    font-weight: 600;
    font-size: 24px;

    // line-height: 28px;
    line-height: 1.16667;
    color: ${({ theme }) => theme.colors.yellowMainColor};
  }

  .routesContainer {
    display: flex;
    flex-direction: column;
    gap: 30px;

    margin-bottom: 66px;
  }

  .routesDirection {
    font-family: ${({ theme }) => theme.fonts.fontFamily};
    font-weight: 600;
    font-size: 24px;

    // line-height: 28px;
    line-height: 1.16667;
    color: ${({ theme }) => theme.colors.white};
  }

  .arrowIcon {
    margin: 0 32px;
  }
`;
