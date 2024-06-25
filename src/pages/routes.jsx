import React from "react";
import PageLayout from "../components/PageLayout";
import { StyledRoutesPage } from "../assets/styles/routesPageStyled";
import RoutesSection from "../components/RoutesSection";

const RoutesPage = () => {
  return (
    <PageLayout
      title="FlixNikBus | flixnikbus Маршрути "
      description="Україна - Польща - Німеччина - Нідерланди"
    >
      <StyledRoutesPage>
        <RoutesSection />
      </StyledRoutesPage>
    </PageLayout>
  );
};

export default RoutesPage;
