import styled from "styled-components";

export const StyledBenefitsAndServicesSection = styled.section`
  padding: 134px 0;

  .benefits {
    margin-bottom: 134px;
  }

  .benefitsTitle {
    margin-bottom: 33px;

    font-family: ${({ theme }) => theme.fonts.fontFamily};
    font-weight: 600;
    font-size: 48px;

    // line-height: 58px;
    line-height: 1.20833;
    color: ${({ theme }) => theme.colors.white};
  }

  .benefitsCards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 32px;
  }

  .services {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 32px;
  }
  .servicesWrapper {
  }
  .servicesTitle {
    margin-bottom: 32px;

    font-family: ${({ theme }) => theme.fonts.fontFamily};
    font-weight: 600;
    font-size: 48px;

    // line-height: 58px;
    line-height: 1.20833;
    color: ${({ theme }) => theme.colors.white};
  }
  .servicesList {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
  .servicesItem {
    display: flex;
    align-items: center;
  }
  .servicesIcon {
    margin-right: 21px;
  }
  .servicesText {
    font-family: ${({ theme }) => theme.fonts.fontFamily};
    font-weight: 500;
    font-size: 18px;

    // line-height: 28px;
    line-height: 1.55556;
    color: ${({ theme }) => theme.colors.white};
  }
`;
