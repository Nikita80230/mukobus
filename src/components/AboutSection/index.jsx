import React from "react";
import ImageGallery from "react-image-gallery";

import Container from "../Container";
import BookButton from "../BookButton";

import aboutSectionImg1 from "../../assets/images/about1.png";
import aboutSectionImg2 from "../../assets/images/about2.png";
import aboutSectionImg3 from "../../assets/images/about3.png";
import aboutSectionImg4 from "../../assets/images/about4.png";
import aboutSectionImg5 from "../../assets/images/about5.png";
import aboutSectionImg6 from "../../assets/images/about6.png";
import aboutSectionImg7 from "../../assets/images/about7.png";
import aboutSectionImg8 from "../../assets/images/about8.png";

import mobileAboutSectionImg1 from "../../assets/images/mobileAboutSection1.png";
import mobileAboutSectionImg2 from "../../assets/images/mobileAboutSection2.png";
import mobileAboutSectionImg3 from "../../assets/images/mobileAboutSection3.png";
import mobileAboutSectionImg4 from "../../assets/images/mobileAboutSection4.png";

import { StyledAboutSection } from "./styled";
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: aboutSectionImg1,
    thumbnail: aboutSectionImg1,
    originalWidth: "650px",
    originalHeight: "704px",
  },
  {
    original: aboutSectionImg2,
    thumbnail: aboutSectionImg2,
    originalWidth: "650px",
    originalHeight: "704px",
  },
  {
    original: aboutSectionImg3,
    thumbnail: aboutSectionImg3,
    originalWidth: "650px",
    originalHeight: "704px",
  },
  {
    original: aboutSectionImg4,
    thumbnail: aboutSectionImg4,
    originalWidth: "650px",
    originalHeight: "704px",
  },
  {
    original: aboutSectionImg5,
    thumbnail: aboutSectionImg5,
    originalWidth: "650px",
    originalHeight: "704px",
    thumbnailWidth: "92px",
    thumbnailHeight: "106px",
  },
  {
    original: aboutSectionImg6,
    thumbnail: aboutSectionImg6,
    originalWidth: "650px",
    originalHeight: "704px",
    thumbnailWidth: "92px",
    thumbnailHeight: "106px",
    thumbnailWidth: "92px",
    thumbnailHeight: "106px",
  },
  {
    original: aboutSectionImg7,
    thumbnail: aboutSectionImg7,
    originalWidth: "650px",
    originalHeight: "704px",
    thumbnailWidth: "92px",
    thumbnailHeight: "106px",
  },
  {
    original: aboutSectionImg8,
    thumbnail: aboutSectionImg8,
    originalWidth: "650px",
    originalHeight: "704px",
    thumbnailWidth: "92px",
    thumbnailHeight: "106px",
  },
];

const AboutSection = ({ isModalOpened, handleToggleModal }) => {
  return (
    <StyledAboutSection id="about">
      <Container>
        <div className="about">
          <div className="imgGrid">
            <ImageGallery items={images} />
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
            <BookButton
              handleToggleModal={handleToggleModal}
              isModalOpened={isModalOpened}
            />
          </div>
        </div>
      </Container>
    </StyledAboutSection>
  );
};

export default AboutSection;
