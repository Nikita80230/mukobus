import React from "react";

import { StyledBookButton } from "./styled";
import { Link } from "gatsby";
import { routes } from "../../constants/routes";

const BookButton = ({ handleToggleModal }) => {
  return (
    <StyledBookButton onClick={handleToggleModal}>Забронювати</StyledBookButton>
  );
};

export default BookButton;
