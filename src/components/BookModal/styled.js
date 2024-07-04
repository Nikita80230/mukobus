import styled from "styled-components";

export const StyledBookModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  background: rgba(179, 179, 179, 0.72);

  z-index: 3;

  .modal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    display: flex;
    flex-direction: column;

    max-width: 695px;
    width: 100%;
    height: 649px;

    padding: 24px 70px;

    border-radius: 16px;

    background: ${({ theme }) => theme.colors.grey};
  }

  .closeModalButton {
    position: absolute;
    top: 8px;
    right: 8px;

    padding: 15px;

    border: none;

    background-color: transparent;
  }

  .closeModalIcon {
    display: block;
  }

  .modalTitle {
    margin-bottom: 16px;

    font-weight: 600;
    font-size: 48px;
    line-height: 1.20833;
    text-align: center;

    font-family: ${({ theme }) => theme.fonts.fontFamily};
    color: ${({ theme }) => theme.colors.black};
  }
  .modalDescription {
    margin-bottom: 20px;

    font-weight: 500;
    font-size: 18px;
    line-height: 1.55556;
    text-align: center;

    font-family: ${({ theme }) => theme.fonts.fontFamily};
    color: ${({ theme }) => theme.colors.black};
  }
  .modalForm {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .formLabel {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 16px;
  }

  /* .formLabel.email {
    justify-content: space-between;
  } */

  .formInputName {
    font-weight: 700;
    font-size: 16px;
    line-height: 1.25;

    font-family: ${({ theme }) => theme.fonts.fontFamily};
    color: ${({ theme }) => theme.colors.black};
  }
  .formInput {
    padding: 0 10px;

    height: 58px;

    border: none;
    border-radius: 16px;

    background-color: ${({ theme }) => theme.colors.white};

    font-weight: 600;
    font-size: 16px;
    line-height: 1.16667;
    font-family: ${({ theme }) => theme.fonts.fontFamily};
    color: ${({ theme }) => theme.colors.black};
  }

  .formInput.textArea {
    height: 108px;
    padding: 24px;

    resize: none;
  }

  .formInputsContactsWrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .formSubmitButton {
    display: flex;
    justify-content: center;
    align-items: center;

    max-width: 289px;
    width: 100%;
    height: 76px;

    border: none;
    border-radius: 16px;

    margin: 0 auto;
    /* padding: 24px 56px; */

    background-color: ${({ theme }) => theme.colors.yellowMainColor};

    font-weight: 600;
    font-size: 24px;
    line-height: 1.16667;
    font-family: ${({ theme }) => theme.fonts.fontFamily};
    color: ${({ theme }) => theme.colors.black};
  }

  .formSubmitButton:disabled {
    background-color: ${({ theme }) => theme.colors.disabled};
    cursor: not-allowed;
  }

  @media (max-width: 564px) {
    .modal {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      display: flex;
      flex-direction: column;

      max-width: 100vw;
      width: 100%;
      height: 100vh;

      padding: 80px 16px 50px;

      border-radius: 0;

      background: ${({ theme }) => theme.colors.grey};
    }

    .modalTitle {
      font-weight: 600;
      font-size: 36px;
      line-height: 1.27778;
    }
    .modalDescription {
      margin-bottom: 20px;

      font-weight: 500;
      font-size: 18px;
    }
    .modalForm {
      width: 100%;
      padding: 0 33px;
    }
    .formLabel {
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin-bottom: 16px;
    }

    .formInputsContactsWrapper {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .formSubmitButton:hover,
    .formSubmitButton:focus {
      background-color: ${({ theme }) => theme.colors.yellowHover};
    }
  }
`;
