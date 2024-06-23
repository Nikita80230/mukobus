import React from "react";
import Container from "../components/Container";
import PageLayout from "../components/PageLayout";
import { StyledDeliveryPage } from "../assets/styles/deliveryPageStyled";
import DeliverySection from "../components/DeliverySection";

const DeliveryPage = () => {
  return (
    <PageLayout>
      <StyledDeliveryPage>
        <DeliverySection />
      </StyledDeliveryPage>
    </PageLayout>
  );
};

export default DeliveryPage;
