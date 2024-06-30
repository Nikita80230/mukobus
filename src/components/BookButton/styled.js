import styled from "styled-components";

export const StyledBookButton = styled.button`
  display: block;
  width: 289px;
  padding: 24px 56px;
  height: 76px;

  border: none;
  border-radius: 16px;

  background: #e8bf00;

  font-family: "Montserrat";
  font-weight: 600;
  font-size: 24px;

  line-height: 1.16667;

  .bookButton {
    color: #322a1e;
    text-decoration: none;
    font-family: "Montserrat";
    font-weight: 600;
    font-size: 24px;

    line-height: 1.16667;
  }

  @media (max-width: 564px) {
    margin: 0 auto;
  }
`;
