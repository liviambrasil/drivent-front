import styled from "styled-components";
import useApi from "../../../hooks/useApi";
import { useEffect, useState } from "react";
import Button from "../../../components/Form/Button";
import ActivitiesCard from "./ActivitiesCard";
export default function Activities() {
  const api = useApi();
  const [eventDays, setEventDays] = useState([]);
  const [event, setEvent] = useState([]);
  //const [startTime, setStartTime] = useState([]);
  //const [endTime, setEndTime] = useState([]);
  const [activities, setActivities] = useState([]);

  console.log(event, "event");

  useEffect(() => {
    api.activity.getDays().then((response) => {
      console.log(response.data);
      setEventDays(response.data); 
    });
  }, []);

  useEffect(() => {
    api.activity.getActivities().then((response) => {
      console.log(response.data);
      setActivities(response.data); 
    });
  }, [event]);

  console.log(activities, "activities");

  function getLocations() {
    api.activity.getLocations().then((response) => {
      console.log(response.data);
      setEvent(response.data);
    });
  }
  console.log(event, "event");
  
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
      {event.length !== 0 ? (<ActivitiesCard />) : (<></>)}
    </> 
  );
}

const Title = styled.h1`
  font-size: 34px;
`;
const Info = styled.h3`
  font-size: 20px;
  color: #8E8E8E;
  margin: 20px 0 10px 0;
`;

