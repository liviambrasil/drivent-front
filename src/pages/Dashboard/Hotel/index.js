import Typography from "@material-ui/core/Typography";
import { useState } from "react";
import styled from "styled-components";
import HotelCard from "./HotelCard";

export default function Hotel() {
  const [isOnline, setIsOnline] = useState(false);
  const [isPaid, setIsPaid] = useState(false);
  const [isHotel, setIsHotel] = useState(true);
  const [hotelOptions, setHotelOptions] = useState([
    {
      name: "Driven Resort",
      maxOccupation: 3,
      availableRooms: 102,
      image:
        "https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg",
    },
    {
      name: "Driven hostel",
      maxOccupation: 2,
      availableRooms: 50,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXbT9yw0Q1cjzI7VEZwiJNkJOidtqNN_P-bA&usqp=CAU",
    },
  ]);

  return (
    <>
      <StyledTypography variant="h4">
        Escolha de hotel e quarto
      </StyledTypography>
      <Title>Primeiro, escolha seu hotel</Title>
      <ChooseHotel>
        {hotelOptions.map((h) => (
          <HotelCard
            name={h.name}
            maxOccupation={h.maxOccupation}
            availableRooms={h.availableRooms}
            image={h.image}
          />
        ))}
      </ChooseHotel>
      <CenterMessage isHotel={isHotel}>
        <OnlineMessage isOnline={isOnline}>
          Sua modalidade de ingresso não inclui hospedagem
          <br />
          Prossiga para a escolha de atividades
        </OnlineMessage>
        <NotPaidMessage isPaid={isPaid}>
          Você precisa ter confirmado pagamento antes
          <br />
          de fazer a escolha de hospedagem
        </NotPaidMessage>
      </CenterMessage>
    </>
  );
}

const StyledTypography = styled(Typography)``;

const ChooseHotel = styled.ul`
  width: 100%;
  display: flex;
`;

const CenterMessage = styled.div`
  width: 100%;
  height: 80%;
  display: ${(props) => (props.isHotel ? "none" : " flex")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    color: #8e8e8e;
    text-align: center;
    font-size: 20px;
  }
`;

const OnlineMessage = styled.p`
  ${(props) => (props.isOnline ? "" : "display: none")}
`;

const NotPaidMessage = styled.p`
  ${(props) => (props.isPaid ? "" : "display: none")}
`;

const Title = styled.p`
  color: #8e8e8e;
  font-size: 20px;
  margin: 36px 0;
`;
