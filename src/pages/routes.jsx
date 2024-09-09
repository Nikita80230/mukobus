import React, { useEffect, useState } from "react";
import PageLayout from "../components/PageLayout";
import { StyledRoutesPage } from "../assets/styles/routesPageStyled";
import RoutesSection from "../components/RoutesSection";
import BookModal from "../components/BookModal";

const RoutesPage = () => {
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
      title="MukoBus | mukoBus Маршрути "
      description="Україна - Польща - Німеччина - Нідерланди"
    >
      <StyledRoutesPage>
        <RoutesSection handleToggleModal={handleToggleModal} />
      </StyledRoutesPage>

      {isModalOpened && (
        <BookModal
          handleToggleModal={handleToggleModal}
          isModalOpened={isModalOpened}
        />
      )}
    </PageLayout>
  );
};

export default RoutesPage;
