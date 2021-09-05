import { useEffect, useState } from "react";
import styled from "styled-components";
import useApi from "../../../hooks/useApi";
import HotelCard from "./HotelCard";

export default function HotelSelection({ selectedHotel, setSelectedHotel }) {
  const [isOnline, setIsOnline] = useState(false);
  const [isPaid, setIsPaid] = useState(false);
  const [isHotel, setIsHotel] = useState(true);
  const { hotel } = useApi();

  const [hotelOptions, setHotelOptions] = useState([]);

  useEffect(() => {
    hotel.listAll().then((r) => {
      setHotelOptions(r.data);
    });
  }, []);

  return (
    <>
      <ChooseHotel>
        {hotelOptions.map((h) => (
          <HotelCard
            selectedHotel={selectedHotel}
            setSelectedHotel={setSelectedHotel}
            id={h.id}
            name={h.name}
            maxOccupation={h.maxRoomOccupation}
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
