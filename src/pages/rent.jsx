import React from "react";
import PageLayout from "../components/PageLayout";
import { StyledRentPage } from "../assets/styles/rentPageStyled";
import Container from "../components/Container";
import RentBusSection from "../components/RentBusSection";

const RentPage = () => {
  return (
    <PageLayout
      title="FlixNikBus | Оренда приватного транспорту з водієм"
      description="Послуга оренди приватного транспорту для індивідуальних поїздок сімейних відпусток комфортних переїздів забезпечує точність маршрутів та графіку"
    >
      <StyledRentPage>
        <RentBusSection />
      </StyledRentPage>
    </PageLayout>
  );
};

export default RentPage;
