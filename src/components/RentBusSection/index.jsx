import React from "react";
import { StyledRentBusSection } from "./styled";
import Container from "../Container";
import BookButton from "../BookButton";

const RentBusSection = () => {
  return (
    <StyledRentBusSection>
      <Container>
        <div className="rentBusSection">
          <h1 className="rentBusTitle">
            Оренда приватного транспорту з водієм
          </h1>
          <p className="rentBusDescription">
            Послуга оренди приватного транспорту з водієм ідеально підходить для
            індивідуальних поїздок, сімейних відпусток чи комфортних переїздів,
            забезпечуючи гнучкість у плануванні маршрутів та графіку. Вона надає
            змогу клієнтам насолоджуватися поїздками без зайвих турбот,
            пов'язаних із водінням та навігацією. Крім того, послуга оренди
            приватного транспорту з водієм може бути налаштована відповідно до
            індивідуальних потреб клієнта, включаючи вибір автомобіля,
            тривалість оренди та додаткові послуги. Це робить її чудовим вибором
            для тих, хто цінує комфорт, безпеку і гнучкість у подорожах.
          </p>
          <BookButton />
        </div>
      </Container>
    </StyledRentBusSection>
  );
};

export default RentBusSection;
