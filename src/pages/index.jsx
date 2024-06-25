import * as React from "react";
import PageLayout from "../components/PageLayout";
import { StyledHomePage } from "../assets/styles/homePageStyled";
// import Container from "../components/Container";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import BenefitsAndServicesSection from "../components/BenefitsAndServicesSection";
import ContactsSection from "../components/ContactsSection";

export default function Home() {
  return (
    <PageLayout
      title="FlixNikBus | Міжнародні пасажирські перевезення"
      description="Ми забезпечуємо найвищий рівень сервісу у міжнародних перевезеннях пасажирів"
    >
      <StyledHomePage>
        <HeroSection />
        <AboutSection />
        <BenefitsAndServicesSection />
        <ContactsSection />
        {/* <Container>
          <h1>Hello world!</h1>
        </Container> */}
      </StyledHomePage>
    </PageLayout>
  );
}
