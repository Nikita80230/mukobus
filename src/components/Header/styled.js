import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    min-height: 104px;
  }

  .logo {
    margin-right: auto;
  }

  .logoLink {
    font-family: ${({ theme }) => theme.fonts.secondFamily};
    font-weight: 700;
    font-size: 36px;
    color: ${({ theme }) => theme.colors.yellowMainColor};
    text-decoration: none;
  }

  .navigation {
    display: flex;
    align-items: center;
    justify-content: space-between;

    max-width: 865px;
    width: 100%;
    /* gap: 74px; */
  }

  .navigationLink {
    font-family: ${({ theme }) => theme.fonts.fontFamily};
    font-weight: 600;
    font-size: 16px;

    // line-height: 20px;
    line-height: 1.25;
    color: ${({ theme }) => theme.colors.white};
  }
  .navigationLink.lightTheme {
    color: ${({ theme }) => theme.colors.black};
  }
  .navigationLink.active {
    color: ${({ theme }) => theme.colors.yellowMainColor};
  }

  .burgerMenuBtn {
    display: none;
  }

  @media (max-width: 564px) {
    display: flex;
    align-items: center;

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;

      min-height: 67px;
    }

    .navigation {
      display: none;
    }

    .burgerMenuBtn {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 46px;
      height: 46px;

      background-color: transparent;
      border: none;
    }
  }
`;
