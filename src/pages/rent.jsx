import React from "react";
import PageLayout from "../components/PageLayout";
import { StyledRentPage } from "../assets/styles/rentPageStyled";
import Container from "../components/Container";

const RentPage = () => {
  return (
    <PageLayout>
      <StyledRentPage>
        <Container>
          <h1>RentPage</h1>
        </Container>
      </StyledRentPage>
    </PageLayout>
  );
};

export default RentPage;
