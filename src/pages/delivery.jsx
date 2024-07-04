import React, { useEffect, useState } from "react";
import PageLayout from "../components/PageLayout";
import { StyledDeliveryPage } from "../assets/styles/deliveryPageStyled";
import DeliverySection from "../components/DeliverySection";
import BookModal from "../components/BookModal";

const DeliveryPage = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);

  const handleToggleModal = () => {
    setIsModalOpened(!isModalOpened);
  };

  useEffect(() => {
    if (isModalOpened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isModalOpened]);

  return (
    <PageLayout
      title="FlixNikBus | Міжнародна доставка посилок"
      description="Швидка надійна доставка міжнародних посилок разом з нашим перевізником! Ми пропонуємо ефективні та доступні послуги доставки для бізнесу або особистих потреб"
    >
      <StyledDeliveryPage>
        <DeliverySection handleToggleModal={handleToggleModal} />
      </StyledDeliveryPage>
      {isModalOpened && (
        <BookModal
          handleToggleModal={handleToggleModal}
          isModalOpened={isModalOpened}
        />
      )}
    </PageLayout>
  );
};

export default DeliveryPage;
