import NotPaidMessage from "./NotPaidMessage";
import styled from "styled-components";
import useApi from "../../../hooks/useApi";
import { useEffect, useState } from "react";
import Button from "../../../components/Form/Button";

export default function Activities() {
  const [presential, setPresential] = useState(false);
  const [isPaid, setIsPaid] = useState(null);
  const api = useApi();
  const [eventDays, setEventDays] = useState([]);
  useEffect(() => {
    const promise = api.ticket.get();
    promise.then((response) => {
      setIsPaid(response.data.isPaid);
      if (response.data.isPresential) setPresential(true);
    }, []);
  });
  
  useEffect(() => {
    api.activity.getDays().then((response) => {
      setEventDays(response.data); 
    });
  }, []);

  function getLocations() {
    api.activity.getLocations().then((response) => {
    });
  }
  
  return (
    <>
      <Title>Escolha de atividades</Title>
     
      {isPaid ? (
        !presential ? (
          <NoRegister>
            <p>
              Sua modalidade de ingresso não necessita escolher atividade. Você
              terá acesso a todas as atividades.
            </p>
          </NoRegister>
        ) : (
          <>
            <Info>Primeiro, filtre pelo dia do evento</Info>
            {eventDays.map((d, index) => {
              return(
                <Days key = { index} onClick={getLocations}>
                  <p>{d.dayInfo}</p>
                </Days>
              );
            })}
          </>
        )
      ) : (
        <NotPaidMessage />
      )}
     
    </> 
  );
}

const Days = styled(Button)`
  margin-right: 17px !important;
`;

const Title = styled.h1`
font-size: 34px;
`;
const Info = styled.h3`
  font-size: 20px;
  color: #8E8E8E;
  margin: 20px 0 10px 0;
`;

const NoRegister = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80%;

  p {
    width: 60%;
    font-size: 20px;
    color: #8e8e8e;
    text-align: center;
  }
`;
