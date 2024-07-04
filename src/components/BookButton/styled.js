import styled from "styled-components";

export const StyledBookButton = styled.button`
  display: block;
  width: 289px;
  padding: 24px 56px;
  height: 76px;

  border: none;
  border-radius: 16px;

  background: #e8bf00;

  text-decoration: none;
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 24px;
  line-height: 1.16667;

  color: #322a1e;

  transition: ${({ theme }) => theme.animations.transition};

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.yellowHover};
  }

  @media (max-width: 564px) {
    margin: 0 auto;
  }
`;
