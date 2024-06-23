import React from "react";
import { StyledDeliverySection } from "./styled";
import Container from "../Container";
import BookButton from "../BookButton";

const DeliverySection = () => {
  return (
    <StyledDeliverySection>
      <Container>
        <div className="deliverySection">
          <h1 className="deliveryTitle">Доставка міжнародних посилок</h1>
          <p className="deliveryDescription">
            Швидка та надійна доставка міжнародних посилок разом з нашим
            перевізником! Ми пропонуємо ефективні та доступні послуги доставки
            для вашого бізнесу або особистих потреб. З нами ваші посилки
            дістануться до адресата швидко і вчасно. Незалежно від розміру або
            обсягу вантажу, ми зробимо все можливе, щоб забезпечити найвищу
            якість обслуговування. Довірте свої міжнародні відправлення нашій
            досвідченій команді і будьте впевнені, що ваші посилки в надійних
            руках. Ми гарантуємо швидку, безпечну та своєчасну доставку ваших
            важливих відправлень, забираємо з адреси. Відпаравка по Україні
            здійснюється Новою Поштою.
          </p>
          <BookButton />
        </div>
      </Container>
    </StyledDeliverySection>
  );
};

export default DeliverySection;
