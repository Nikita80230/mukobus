import styled from "styled-components";

import deliverySectionImg from "../../assets/images/deliverySectionImg.png";
import deliverySectionMobileImg from "../../assets/images/deliverySectionMobileImg.png";

export const StyledDeliverySection = styled.section`
  padding-top: 120px;
  padding-bottom: 120px;

  .deliverySection {
    width: 100%;
  }
  .deliveryTitle {
    margin-bottom: 34px;

    font-family: ${({ theme }) => theme.fonts.fontFamily};
    font-weight: 600;
    font-size: 48px;

    // line-height: 58px;
    line-height: 1.20833;
    color: ${({ theme }) => theme.colors.black};
  }
  .deliveryDescription {
    max-width: 573px;
    width: 100%;

    margin-bottom: 34px;

    font-family: ${({ theme }) => theme.fonts.fontFamily};
    font-weight: 500;
    font-size: 18px;

    // line-height: 28px;
    line-height: 1.55556;
    color: ${({ theme }) => theme.colors.black};
  }

  .deliveryPackingRules {
    font-family: ${({ theme }) => theme.fonts.fontFamily};
    font-weight: 500;
    font-size: 18px;
    line-height: 1.55556;
    color: ${({ theme }) => theme.colors.black};
  }

  .content {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 32px;
  }
  .infoWrapper {
    width: 50%;
  }
  .contentImg {
    /* max-width: 50%; */
    margin-top: 20px;
    margin-bottom: 34px;
  }

  .rightColumnInfo {
    font-family: ${({ theme }) => theme.fonts.fontFamily};
    font-weight: 500;
    font-size: 18px;

    // line-height: 28px;
    line-height: 1.55556;
    color: ${({ theme }) => theme.colors.black};
  }

  .rightColumn {
    display: flex;
    flex-direction: column;
    width: 50%;
  }

  @media (max-width: 564px) {
    padding-top: 45px;
    padding-bottom: 45px;

    .deliverySection {
      width: 100%;
    }

    .content {
      display: flex;
      flex-direction: column;
      gap: 0;
    }

    .rightColumn {
      display: flex;
      flex-direction: column;
      width: 100%;
    }

    .infoWrapper {
      width: 100%;
    }

    .contentImg {
      margin-bottom: 24px;
    }

    .rightColumnInfo {
      margin-bottom: 34px;

      font-family: ${({ theme }) => theme.fonts.fontFamily};
      font-weight: 500;
      font-size: 18px;

      // line-height: 28px;
      line-height: 1.55556;
      color: ${({ theme }) => theme.colors.black};
    }

    .deliveryTitle {
      margin-bottom: 34px;

      font-weight: 600;
      font-size: 32px;
      line-height: 1.4375;

      font-family: ${({ theme }) => theme.fonts.fontFamily};
      color: ${({ theme }) => theme.colors.black};
    }
    .deliveryDescription {
      font-weight: 500;
      font-size: 18px;
      line-height: 1.55556;

      font-family: ${({ theme }) => theme.fonts.fontFamily};
      color: ${({ theme }) => theme.colors.black};
    }
  }
`;
