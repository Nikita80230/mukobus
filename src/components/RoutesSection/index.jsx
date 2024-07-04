import React from "react";
import { StyledRoutesSection } from "./styled";
import Container from "../Container";
import BookButton from "../BookButton";
import Arrow from "../../assets/images/arrow.inline.svg";

const RoutesSection = ({ handleToggleModal }) => {
  return (
    <StyledRoutesSection>
      <Container>
        <div className="routesSection">
          <h1 className="routesSectionTitle">Маршрути</h1>
          <span className="routesSectionSubtitle">
            Україна - Польща - Німеччина - Нідерланди
          </span>
          <div className="routesContainer">
            <span className="routesDirection">
              Київ
              <Arrow className="arrowIcon" />
              Житомир
              <Arrow className="arrowIcon" />
              Рівне
              <Arrow className="arrowIcon" />
              Львів
            </span>
            <span className="routesDirection">
              Краків
              <Arrow className="arrowIcon" />
              Катовіце
              <Arrow className="arrowIcon" />
              Вроцлав
            </span>
            <span className="routesDirection">
              Берлін
              <Arrow className="arrowIcon" />
              Дрезден
              <Arrow className="arrowIcon" />
              Лейпціг
              <Arrow className="arrowIcon" />
              Гановер
            </span>
            <span className="routesDirection">
              Білефельд
              <Arrow className="arrowIcon" />
              Дортмунд
              <Arrow className="arrowIcon" />
              Кельн
            </span>
            <span className="routesDirection">
              Брюсель
              <Arrow className="arrowIcon" />
              Амстердам
            </span>
          </div>
          <BookButton handleToggleModal={handleToggleModal} />
        </div>
      </Container>
    </StyledRoutesSection>
  );
};

export default RoutesSection;
