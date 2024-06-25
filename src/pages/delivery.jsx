import React from "react";
import Container from "../components/Container";
import PageLayout from "../components/PageLayout";
import { StyledDeliveryPage } from "../assets/styles/deliveryPageStyled";
import DeliverySection from "../components/DeliverySection";

const DeliveryPage = () => {
  return (
    <PageLayout
      title="FlixNikBus | Міжнародна доставка посилок"
      description="Швидка надійна доставка міжнародних посилок разом з нашим перевізником! Ми пропонуємо ефективні та доступні послуги доставки для бізнесу або особистих потреб"
    >
      <StyledDeliveryPage>
        <DeliverySection />
      </StyledDeliveryPage>
    </PageLayout>
  );
};

export default DeliveryPage;
