import React from "react";

import { StyledBookButton } from "./styled";
import { Link } from "gatsby";
import { routes } from "../../constants/routes";

const BookButton = () => {
  return (
    <StyledBookButton>
      <Link className="bookButton" to={`${routes.HOME}#contacts`}>
        Забронювати
      </Link>
    </StyledBookButton>
  );
};

export default BookButton;
