import styled from "styled-components";
import useApi from "../../../hooks/useApi";
import { useEffect, useState } from "react";
import Button from "../../../components/Form/Button";
export default function Activities() {
  const api = useApi();
  const [eventDays, setEventDays] = useState([]);
  useEffect(() => {
    api.activity.getDays().then((response) => {
      console.log(response.data);
      setEventDays(response.data); 
    });
  }, []);

  function getLocations() {
    api.activity.getLocations().then((response) => {
      console.log(response.data);
    });
  }

  return (
    <>
      <Title>Escolha de atividades</Title>
      <Info>Primeiro, filtre pelo dia do evento</Info>

      {eventDays.map((d, index) => {
        return(
          <Button key = { index} onClick={getLocations}>
            <p>{d.dayInfo}</p>
          </Button>
        );
      })}
    </> 
  );
}