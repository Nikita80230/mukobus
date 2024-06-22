import React from "react";
import Container from "../components/Container";
import PageLayout from "../components/PageLayout";
import { StyledDeliveryPage } from "../assets/styles/deliveryPageStyled";

const DeliveryPage = () => {
  return (
    <PageLayout>
      <StyledDeliveryPage>
        <Container>
          <h1>DeliveryPage</h1>
        </Container>
      </StyledDeliveryPage>
    </PageLayout>
  );
};

export default DeliveryPage;
