import React from "react";
import { StyledBenefitsAndServicesSection } from "./styled";
import Container from "../Container";

import Icon1 from "../../assets/images/benefitsIcon1.inline.svg";
import Icon2 from "../../assets/images/benefitsIcon2.inline.svg";
import Icon3 from "../../assets/images/benefitsIcon3.inline.svg";

import servicesImg from "../../assets/images/advantagesImg.png";

import CheckIcon from "../../assets/images/checkIcon.inline.svg";

import BenefitCard from "../BenefitCard";

const benefitsData = [
  {
    icon: Icon1,
    title: "Індивідуальний підхід",
    text: "З нами ваш комфорт починається  відразу з дверей вашого будинку і триває всю подорож.",
  },
  {
    icon: Icon2,
    title: "Все для вашої зручності",
    text: "Наші автомобілі оснащені клімат-контролем, дитячими автокріслами, безкоштовним Wi-Fi та засобами для  підзарядки гаджетів.",
  },
  {
    icon: Icon3,
    title: "Досвідчені водії",
    text: "Наші водії - професіонали у своїй справі, мають великий досвід, що дозволяє швидко та легко перетинати кордони.",
  },
];

const BenefitsAndServicesSection = () => {
  return (
    <StyledBenefitsAndServicesSection>
      <Container>
        <div className="benefitsAndServicesSection">
          <div className="benefits">
            <h1 className="benefitsTitle">Наші переваги</h1>
            <div className="benefitsCards">
              {benefitsData.map(({ icon, title, text }) => {
                return (
                  <BenefitCard
                    icon={icon}
                    title={title}
                    text={text}
                    key={title}
                  />
                );
              })}
            </div>
          </div>
          <div className="services">
            <div className="servicesWrapper">
              <h3 className="servicesTitle">Послуги</h3>
              <ul className="servicesList">
                <li className="servicesItem">
                  <CheckIcon className="servicesIcon" />
                  <span className="servicesText">
                    Перевезення пасажирів у напрямку
                    <br /> Україна - Європа - Україна
                  </span>
                </li>
                <li className="servicesItem">
                  <CheckIcon className="servicesIcon" />
                  <span className="servicesText">
                    Професійне обслуговування, індивідуальний підхід <br /> до
                    кожного клієнта
                  </span>
                </li>
                <li className="servicesItem">
                  <CheckIcon className="servicesIcon" />
                  <span className="servicesText">
                    Швидка та надійна доставка міжнародних <br /> посилок
                  </span>
                </li>
                <li className="servicesItem">
                  <CheckIcon className="servicesIcon" />
                  <span className="servicesText">
                    Оренда приватного транспорту <br /> з водієм
                  </span>
                </li>
              </ul>
            </div>
            {/* <div> */}
            <img src={servicesImg} alt="bus image" />
            {/* </div> */}
          </div>
        </div>
      </Container>
    </StyledBenefitsAndServicesSection>
  );
};

export default BenefitsAndServicesSection;
