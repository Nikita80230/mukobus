import React from "react";
import { StyledDeliverySection } from "./styled";
import Container from "../Container";
import BookButton from "../BookButton";

import deliverySectionImg from "../../assets/images/deliverySectionImg.png";
import deliverySectionMobileImg from "../../assets/images/deliverySectionMobileImg.png";

const DeliverySection = ({ handleToggleModal }) => {
  return (
    <StyledDeliverySection>
      <Container>
        <div className="deliverySection">
          <div className="content">
            <div className="infoWrapper">
              <h1 className="deliveryTitle">Доставка міжнародних посилок</h1>
              <p className="deliveryDescription">
                Швидка та надійна доставка міжнародних посилок разом з нашим
                перевізником! Ми пропонуємо ефективні та доступні послуги
                доставки для вашого бізнесу або особистих потреб.
              </p>
              <p className="deliveryDescription">
                З нами ваші посилки дістануться до адресата швидко і вчасно.
                Незалежно від розміру або обсягу вантажу, ми зробимо все
                можливе, щоб забезпечити найвищу якість обслуговування.
              </p>
              <p className="deliveryDescription">
                Довірте свої міжнародні відправлення нашій досвідченій команді і
                будьте впевнені, що ваші посилки в надійних руках.
              </p>
              <p className="deliveryDescription">
                Ми гарантуємо швидку, безпечну та своєчасну доставку ваших
                важливих відправлень, забираємо з адреси. Відпаравка по Україні
                здійснюється Новою Поштою.
              </p>

              <p className="deliveryPackingRules">
                <strong>
                  Як правильно упакувати посилку перед відправленням:
                </strong>
                <br />
                <br />
                <strong>1.</strong> Для швидкої і без проблемної відправки Ваших
                посилок, має бути вказано чітку інформацію про відправника та
                одержувача: повні імена, контактні номери телефонів, а також
                точну адресу доставки.
                <br />
                <br />
                <strong>2.</strong> При упакуванні відправлень, краще
                використовувати міцні пакети або валізи, а не коробки. Для
                об'ємних відправлень, це дуже важливо, щоб забезпечити безпеку
                та цілісність вашої посилки під час транспортування.
              </p>
            </div>
            <div className="rightColumn">
              <img
                className="contentImg"
                src={deliverySectionImg}
                alt="Доставка міжнародних посилок"
              />
              <p className="rightColumnInfo">
                <strong>
                  Обмеження на вміст посилок з України в ЄС Продукти харчування:
                </strong>
                <br />
                <br />
                Заборонено включати овочі, фрукти, швидкопсувні продукти,
                молочні вироби, яйця. Лікарські засоби: Сильнодіючі лікарські
                препарати дозволено відправляти лише за наявності призначення
                або рецепта від лікаря. Тютюнові вироби та алкоголь:
                Відправлення сигарет і алкогольних напоїв має свої обмеження та
                чітко регулюється. Цей список не є вичерпним. Для отримання
                детальної інформації про повний перелік обмежених предметів для
                відправлення, будь ласка, відвідайте офіційний сайт посилання
                <a
                  href="http://customs.gov.ua/en/tovari-shchodo-iakikh-diiut-obmezhennia"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  (https://customs.gov.ua/en/tovari-shchodo-iakikh-diiut-obmezhennia)
                </a>
                Прикордонної служби України.
              </p>
            </div>
          </div>

          <BookButton handleToggleModal={handleToggleModal} />
        </div>
      </Container>
    </StyledDeliverySection>
  );
};

export default DeliverySection;
