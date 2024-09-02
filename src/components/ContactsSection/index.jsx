import React from "react";
import Container from "../Container";

import CheckIcon from "../../assets/images/checkIcon.inline.svg";
import Telegram from "../../assets/images/telegramIcon.inline.svg";
import WhatsApp from "../../assets/images/whatsappIcon.inline.svg";
import Viber from "../../assets/images/viberIcon.inline.svg";

import { StyledContactsSection } from "./styled";

const ContactsSection = () => {
  return (
    <StyledContactsSection id="contacts">
      <Container>
        <h2 className="contactsSectionTitle">Контакти</h2>
        <div className="contactsContainer">
          <h4 className="contactsSubtitle">Пасажирські перевезення</h4>
          <span className="contactsSpan">Україна - Німеччина - Нідерланди</span>
          <ul className="servicesDescriptionList">
            <li className="servicesDescriptionItem">
              <CheckIcon className="servicesDescriptionIcon" />
              <span className="servicesDescriptionText">
                Забираємо з адреси
              </span>
            </li>
            <li className="servicesDescriptionItem">
              <CheckIcon className="servicesDescriptionIcon" />
              <span className="servicesDescriptionText">Без передплат</span>
            </li>
            <li className="servicesDescriptionItem">
              <CheckIcon className="servicesDescriptionIcon" />
              <span className="servicesDescriptionText">
                Швидко і комфортово
              </span>
            </li>
            <li className="servicesDescriptionItem">
              <CheckIcon className="servicesDescriptionIcon" />
              <span className="servicesDescriptionText">
                Без черг на кордоні
              </span>
            </li>
            <li className="servicesDescriptionItem">
              <CheckIcon className="servicesDescriptionIcon" />
              <span className="servicesDescriptionText">
                Беремо передачі та габаритні вантажі
              </span>
            </li>
          </ul>
          <div className="contactsLinksContainer">
            <div className="iconsWrapper">
              <a
                className="navigationLink"
                href="https://t.me/+380505298891"
                // TODO:
                target="_blank"
              >
                <Telegram className="contactIcon" />
              </a>
              <a
                className="navigationLink"
                href="https://wa.me/+380505298891"
                target="_blank"
              >
                <WhatsApp className="contactIcon" />
              </a>
              <a
                className="navigationLink"
                href="viber://chat?number=+380505298891"
                target="_blank"
              >
                <Viber className="contactIcon" />
              </a>
            </div>
            <div className="contactNumbers">
              <ul className="contactNumbersList">
                <li className="contactNumbersItem">
                  <a className="contactNumberLink" href="tel:+380960840062">
                    +38 (096) 084 00 62
                  </a>
                </li>
                <li className="contactNumbersItem">
                  <a className="contactNumberLink" href="tel:+380985589464">
                    +38 (098) 558 94 64
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </StyledContactsSection>
  );
};

export default ContactsSection;
