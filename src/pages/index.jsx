import * as React from "react";
import { useState } from "react";
import PageLayout from "../components/PageLayout";
import { StyledHomePage } from "../assets/styles/homePageStyled";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import BenefitsAndServicesSection from "../components/BenefitsAndServicesSection";
import ContactsSection from "../components/ContactsSection";
import { useEffect } from "react";
import BookModal from "../components/BookModal";

export default function Home() {
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
      title="MukoBus | Міжнародні пасажирські перевезення"
      description="Ми забезпечуємо найвищий рівень сервісу у міжнародних перевезеннях пасажирів"
    >
      <StyledHomePage>
        <HeroSection
          handleToggleModal={handleToggleModal}
          isModalOpened={isModalOpened}
        />
        <AboutSection
          handleToggleModal={handleToggleModal}
          isModalOpened={isModalOpened}
        />
        <BenefitsAndServicesSection />
        <ContactsSection />
        {isModalOpened && (
          <BookModal
            handleToggleModal={handleToggleModal}
            isModalOpened={isModalOpened}
          />
        )}
      </StyledHomePage>
    </PageLayout>
  );
}
