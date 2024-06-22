import styled from "styled-components";

export const StyledBenefitCard = styled.div`
  min-height: 300px;

  padding: 24px;

  border-radius: 16px;
  box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.15), 0 1px 2px 0 rgba(0, 0, 0, 0.3);

  background-color: ${({ theme }) => theme.colors.white};

  .cardIcon {
    margin-bottom: 32px;
  }
  .cardTitle {
    margin-bottom: 32px;

    font-family: ${({ theme }) => theme.fonts.fontFamily};
    font-weight: 700;
    font-size: 18px;

    // line-height: 28px;
    line-height: 1.55556;
    color: ${({ theme }) => theme.colors.black};
  }
  .cardText {
    font-family: ${({ theme }) => theme.fonts.fontFamily};
    font-weight: 500;
    font-size: 18px;

    // line-height: 28px;
    line-height: 1.55556;
    color: ${({ theme }) => theme.colors.black};
  }
`;
