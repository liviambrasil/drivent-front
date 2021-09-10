import styled from "styled-components";
import useApi from "../../../hooks/useApi";
import { useEffect, useState } from "react";
import Button from "../../../components/Form/Button";
import { Typography } from "@material-ui/core";

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
      <StyledTypography variant="h4">Escolha de atividades</StyledTypography>

      {!presential
        ? <NoRegister>
          <p>Sua modalidade de ingresso não necessita escolher atividade. Você terá acesso a todas as atividades.</p>
        </NoRegister>
        : <p>Renderizar atividades</p>
      }
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
