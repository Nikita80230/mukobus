import * as React from "react";
import PageLayout from "../components/PageLayout";
import { StyledHomePage } from "../assets/styles/homePageStyled";
// import Container from "../components/Container";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import BenefitsAndServicesSection from "../components/BenefitsAndServicesSection";

export default function Home() {
  return (
    <PageLayout>
      <StyledHomePage>
        <HeroSection />
        <AboutSection />
        <BenefitsAndServicesSection />
        {/* <Container>
          <h1>Hello world!</h1>
        </Container> */}
      </StyledHomePage>
    </PageLayout>
  );
}
