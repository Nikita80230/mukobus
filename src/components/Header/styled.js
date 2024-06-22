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
    font-family: "DMSans";
    font-weight: 700;
    font-size: 36px;
    color: #e8bf00;
    text-decoration: none;
  }

  .navigation {
    display: flex;
    align-items: center;
    gap: 74px;
  }

  .navigationLink {
    font-family: "Montserrat";
    font-weight: 600;
    font-size: 16px;

    // line-height: 20px;
    line-height: 1.25;
    color: #f9f9f9;
  }
`;
