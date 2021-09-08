import { useEffect, useState } from "react";
import styled from "styled-components";
import useApi from "../../../hooks/useApi";
import HotelCard from "./HotelCard";

export default function HotelSelection({ selectedHotel, setSelectedHotel }) {
  const [isPresencial, setIsPresencial] = useState(false);
  const [isPaid, setIsPaid] = useState(true);
  const { hotel } = useApi();

  const [hotelOptions, setHotelOptions] = useState([]);

  useEffect(() => {
    hotel.listAll().then((r) => {
      setHotelOptions(r.data);
    });
  }, []);

  const isPaidAndPresencial = isPresencial && isPaid;

  return (
    <>
      {isPaidAndPresencial && <Title>Primeiro, escolha seu hotel</Title>}
      <ChooseHotel>
        {isPaidAndPresencial &&
          hotelOptions.map((h) => (
            <HotelCard
              key={h.id}
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
      <CenterMessage hidden={isPaidAndPresencial}>
        {isPaid ? (
          isPresencial ? (
            ""
          ) : (
            <OnlineMessage isPresencial={!(isPresencial && isPaid)}>
              Sua modalidade de ingresso não inclui hospedagem
              <br />
              Prossiga para a escolha de atividades
            </OnlineMessage>
          )
        ) : (
          <NotPaidMessage isPaid={isPaid}>
            Você precisa ter confirmado pagamento antes
            <br />
            de fazer a escolha de hospedagem
          </NotPaidMessage>
        )}
      </CenterMessage>
    </>
  );
}

const ChooseHotel = styled.ul`
  width: 100%;
  display: flex;
`;
const Title = styled.p`
  color: #8e8e8e;
  font-size: 20px;
  margin: 36px 0;
`;
const CenterMessage = styled.div`
  width: 100%;
  height: 80%;
  display: ${({ hidden }) => (hidden ? "none" : "flex")};
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
  /* ${(props) => (props.isPresencial ? "" : "display: none")} */
`;

const NotPaidMessage = styled.p`
  /* ${(props) => (!props.isPaid ? "" : "display: none")} */
`;
