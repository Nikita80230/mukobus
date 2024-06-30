import styled from "styled-components";

export const StyledBurgerMenu = styled.div`
  position: fixed;
  left: 0;
  top: 67px;

  width: 100vw;
  height: calc(100vh - 67px);

  padding-top: 64px;

  /* border: 2px solid red; */

  z-index: 2;

  background: ${({ theme }) => theme.colors.backgroundBlack};

  &.lightTheme {
    background: ${({ theme }) => theme.colors.backgroundWhite};
  }

  .burgerMenuNavigation {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    gap: 46px;
  }

  .burgerMenuNavigationLink {
    font-family: ${({ theme }) => theme.fonts.fontFamily};
    font-weight: 600;
    font-size: 24px;

    // line-height: 28px;
    line-height: 1.16667;
    text-align: center;
    color: ${({ theme }) => theme.colors.white};
  }
  .burgerMenuNavigationLink.lightTheme {
    color: ${({ theme }) => theme.colors.black};
  }
  .burgerMenuNavigationLink.active {
    color: ${({ theme }) => theme.colors.yellowMainColor};
  }
`;
