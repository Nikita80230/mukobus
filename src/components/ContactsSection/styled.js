import styled from "styled-components";
import contactsImg from "../../assets/images/contactsSectionImg.png";

export const StyledContactsSection = styled.section`
  min-height: 672px;

  padding: 86px 0;

  background-color: ${({ theme }) => theme.colors.backgroundWhite};
  background-image: url(${contactsImg});
  background-position: top 67% right;
  background-repeat: no-repeat;

  .contactsSectionTitle {
    margin-bottom: 32px;

    font-family: ${({ theme }) => theme.fonts.fontFamily};
    font-weight: 600;
    font-size: 48px;

    // line-height: 58px;
    line-height: 1.20833;
    color: ${({ theme }) => theme.colors.black};
  }
  .contactsContainer {
    display: flex;
    flex-direction: column;
  }
  .contactsSubtitle {
    margin-bottom: 32px;

    font-family: ${({ theme }) => theme.fonts.fontFamily};
    font-weight: 600;
    font-size: 24px;

    // line-height: 28px;
    line-height: 1.16667;
    color: ${({ theme }) => theme.colors.yellowMainColor};
  }
  .contactsSpan {
    margin-bottom: 32px;

    font-family: ${({ theme }) => theme.fonts.fontFamily};
    font-weight: 600;
    font-size: 24px;

    // line-height: 28px;
    line-height: 1.16667;
    color: ${({ theme }) => theme.colors.black};
  }
  .servicesDescriptionList {
    display: flex;
    flex-direction: column;
    gap: 24px;

    margin-bottom: 32px;
  }
  .servicesDescriptionItem {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .servicesDescriptionIcon {
  }
  .servicesDescriptionText {
    font-family: ${({ theme }) => theme.fonts.fontFamily};
    font-weight: 500;
    font-size: 18px;

    // line-height: 28px;
    line-height: 1.55556;
    color: ${({ theme }) => theme.colors.black};
  }

  .contactsLinksContainer {
    display: flex;
    align-items: center;
    gap: 32px;
  }
  .iconsWrapper {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
  .contactIcon {
  }
  .contactNumbers {
  }
  .contactNumbersList {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .contactNumbersItem {
  }
  .contactNumberLink {
    text-decoration: none;

    font-family: ${({ theme }) => theme.fonts.fontFamily};
    font-weight: 600;
    font-size: 48px;

    // line-height: 58px;
    line-height: 1.20833;
    color: ${({ theme }) => theme.colors.black};
  }

  /* ==========================================@media (max-width: 564px)===================================================== */
  @media (max-width: 564px) {
    background-image: none;

    padding: 43px 0;

    .iconsWrapper {
      flex-direction: row;
    }

    .contactsLinksContainer {
      flex-direction: column;
    }

    .contactNumberLink {
      font-weight: 600;
      font-size: 24px;
      line-height: 1.16667;
      text-align: center;
    }
  }
`;
