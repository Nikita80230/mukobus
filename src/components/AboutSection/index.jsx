import React from "react";
import Container from "../Container";

import aboutSectionImg1 from "../../assets/images/about1.png";
import aboutSectionImg2 from "../../assets/images/about2.png";
import aboutSectionImg3 from "../../assets/images/about3.png";
import aboutSectionImg4 from "../../assets/images/about4.png";

import { StyledAboutSection } from "./styled";
import BookButton from "../BookButton";

const AboutSection = () => {
  return (
    <StyledAboutSection id="about">
      <Container>
        <div className="about">
          <div className="imgGrid">
            <img src={aboutSectionImg1} alt="image of bus" />
            <img src={aboutSectionImg2} alt="image of bus" />
            <img src={aboutSectionImg3} alt="image of bus" />
            <img src={aboutSectionImg4} alt="image of bus" />
          </div>
          <div className="aboutInfo">
            <h2 className="aboutTitle">Про нас</h2>
            <p className="aboutText">
              З 2019 року ми забезпечуємо найвищий рівень сервісу у міжнародних
              перевезеннях пасажирів. Наша компанія пропонує надійні та
              комфортні поїздки міжнародних маршрутів для різних потреб.
              Незалежно від того, чи ви подорожуєте для бізнесу або розваг, ми
              забезпечимо вашу безпеку та комфорт протягом всієї подорожі.
              <br />
              <br />
              З нами ви отримаєте професійне обслуговування, індивідуальний
              підхід до кожного клієнта та неперевершені враження від вашого
              мандрівного досвіду. Ми забезпечуємо комфортні та безпечні поїздки
              між Україною та Європою.
              <br />
              <br />
              Наші професійні водії та сучасний транспорт забезпечать вам
              надійну перевезення через кордон. Незалежно від того, чи ви
              подорожуєте для роботи або задоволення, ми зробимо все можливе,
              щоб ваша подорож була приємною та безпроблемною. Виберіть нас, і
              ваша подорож стане незабутньою пригодою!
            </p>
            <BookButton />
          </div>
        </div>
      </Container>
    </StyledAboutSection>
  );
};

export default AboutSection;
