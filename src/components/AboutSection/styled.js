import styled from "styled-components";

export const StyledAboutSection = styled.section`
  min-height: 701px;

  padding-top: 74px;
  padding-bottom: 74px;

  background-color: #f0eeee;

  .about {
    display: flex;
    flex-direction: row;
    gap: 32px;
  }
  .imgGrid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;

    max-width: 610px;
    width: 100%;
  }

  .img {
    display: block;

    width: 289px;
    height: 334px;
  }

  .aboutInfo {
    width: 100%;
  }
  .aboutTitle {
    margin-bottom: 36px;

    font-family: inherit;
    font-weight: 600;
    font-size: 48px;

    // line-height: 58px;
    line-height: 1.20833;
    color: #322a1e;
  }
  .aboutText {
    margin-bottom: 54px;

    font-family: inherit;
    font-weight: 500;
    font-size: 18px;

    line-height: 28px;

    color: #322a1e;
  }

  @media (max-width: 564px) {
    padding-top: 43px;
    padding-bottom: 43px;

    .about {
      display: flex;
      flex-direction: column-reverse;
      gap: 32px;
    }
    .imgGrid {
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 16px;

      max-width: 610px;
      width: 100%;
    }

    .img {
      display: block;

      width: 100%;
      height: 100%;
    }

    .aboutInfo {
      width: 100%;
    }
    .aboutTitle {
      margin-bottom: 36px;

      font-family: inherit;
      font-weight: 600;
      font-size: 48px;

      // line-height: 58px;
      line-height: 1.20833;
      color: #322a1e;
    }
    .aboutText {
      margin-bottom: 54px;

      font-family: inherit;
      font-weight: 500;
      font-size: 18px;

      line-height: 28px;

      color: #322a1e;
    }
  }
`;
