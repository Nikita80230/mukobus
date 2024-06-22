import styled from "styled-components";

export const StyledFooter = styled.footer`
  position: relative;

  height: 218px;

  background: ${({ theme }) => theme.colors.grey};

  .footerCustom {
    display: flex;
    flex-direction: column;
    padding: 32px 0;
  }

  .topFooter {
    display: flex;
    justify-content: space-between;

    margin-bottom: 57px;
  }

  .bottomFooter {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .divider {
    position: absolute;

    bottom: 66px;
    left: 0;

    width: 100%;

    border: 1px solid #bcbcbc;
  }

  .logo {
    margin-right: auto;
  }

  .logoLink {
    font-family: "DMSans";
    font-weight: 700;
    font-size: 36px;
    color: #e8bf00;
    text-decoration: none;
  }

  .contactUsTitle {
    margin-bottom: 10px;

    font-family: ${({ theme }) => theme.fonts.fontFamily};
    font-weight: 600;
    font-size: 20px;

    // line-height: 28px;
    line-height: 1.16667;
    color: ${({ theme }) => theme.colors.black};
  }
  .contactUsNumberLink {
    font-family: ${({ theme }) => theme.fonts.fontFamily};
    font-weight: 600;
    font-size: 20px;

    // line-height: 28px;
    line-height: 1.16667;
    color: ${({ theme }) => theme.colors.black};
  }
`;
