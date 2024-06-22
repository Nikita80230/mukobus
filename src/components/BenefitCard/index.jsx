import React from "react";
import { StyledBenefitCard } from "./styled";

const BenefitCard = ({ icon, title, text }) => {
  const Icon = icon;
  return (
    <StyledBenefitCard>
      <Icon className="cardIcon" />
      <h3 className="cardTitle">{title}</h3>
      <p className="cardText">{text}</p>
    </StyledBenefitCard>
  );
};

export default BenefitCard;
