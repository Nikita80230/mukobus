import React from "react";
import PageLayout from "../components/PageLayout";
import { StyledRentPage } from "../assets/styles/rentPageStyled";
import Container from "../components/Container";
import RentBusSection from "../components/RentBusSection";

const RentPage = () => {
  return (
    <PageLayout>
      <StyledRentPage>
        <RentBusSection />
      </StyledRentPage>
    </PageLayout>
  );
};

export default RentPage;
