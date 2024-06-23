import styled from "styled-components";

import deliverySectionImg from "../../assets/images/deliverySectionImg.png";

export const StyledDeliverySection = styled.section`
  background-image: url(${deliverySectionImg});
  background-position: top 50% right 8%;
  background-repeat: no-repeat;

  min-height: 638px;

  padding-top: 120px;
  padding-bottom: 120px;

  .deliverySection {
    max-width: 573px;
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
    margin-bottom: 34px;

    font-family: ${({ theme }) => theme.fonts.fontFamily};
    font-weight: 500;
    font-size: 18px;

    // line-height: 28px;
    line-height: 1.55556;
    color: ${({ theme }) => theme.colors.black};
  }
`;
