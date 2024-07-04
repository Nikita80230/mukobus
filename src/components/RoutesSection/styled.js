import styled from "styled-components";

import routesSectionImg from "../../assets/images/routesPageSectionImg.png";
import routesSectionBackgroundMobileImg from "../../assets/images/routePageBackgroundMobileImg.png";

export const StyledRoutesSection = styled.section`
  background-image: url(${routesSectionImg});
  background-position: top 50% right 8%;
  background-repeat: no-repeat;

  .routesSection {
    /* height: 760px; */

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

  /* =======================================(max-width: 564px)========================================================= */

  @media (max-width: 564px) {
    background-image: url(${routesSectionBackgroundMobileImg});
    background-position: top 76% right 8%;
    background-repeat: no-repeat;

    .routesSection {
      display: flex;
      flex-direction: column;
      align-items: center;

      padding-top: 45px;
      padding-bottom: 45px;
    }

    .routesSectionTitle {
      margin-bottom: 33px;

      font-weight: 600;
      font-size: 36px;
      line-height: 1.27778;

      font-family: ${({ theme }) => theme.fonts.fontFamily};
      color: ${({ theme }) => theme.colors.white};
    }
    .routesSectionSubtitle {
      display: inline-block;
      margin-bottom: 33px;

      font-weight: 700;
      font-size: 18px;
      line-height: 1.55556;
      text-align: center;

      font-family: ${({ theme }) => theme.fonts.fontFamily};
      color: ${({ theme }) => theme.colors.yellowMainColor};
    }

    .routesContainer {
      display: flex;
      flex-direction: column;
      gap: 30px;

      margin-bottom: 200px;
    }

    .routesDirection {
      font-weight: 500;
      font-size: 16px;
      line-height: 1.75;

      font-family: ${({ theme }) => theme.fonts.fontFamily};
      color: ${({ theme }) => theme.colors.white};
    }

    .arrowIcon {
      margin: 0 6px;
    }
  }
`;
