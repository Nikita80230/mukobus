import React, { useEffect, useState } from "react";
import PageLayout from "../components/PageLayout";
import { StyledRentPage } from "../assets/styles/rentPageStyled";
import RentBusSection from "../components/RentBusSection";
import BookModal from "../components/BookModal";

const RentPage = () => {
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
      title="FlixNikBus | Оренда приватного транспорту з водієм"
      description="Послуга оренди приватного транспорту для індивідуальних поїздок сімейних відпусток комфортних переїздів забезпечує точність маршрутів та графіку"
    >
      <StyledRentPage>
        <RentBusSection handleToggleModal={handleToggleModal} />
      </StyledRentPage>
      {isModalOpened && (
        <BookModal
          handleToggleModal={handleToggleModal}
          isModalOpened={isModalOpened}
        />
      )}
    </PageLayout>
  );
};

export default RentPage;
