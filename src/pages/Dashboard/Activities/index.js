import styled from "styled-components";
import { useEffect, useState } from "react";
import useApi from "../../../hooks/useApi";
import { Typography } from "@material-ui/core";
import ActivitiesCard from "./ActivitiesCard";
export default function Activities() {
  const [presential, setPresential] = useState(false);
  const api = useApi();

  useEffect(() => {
    const promise = api.ticket.get();
    promise.then(response => {
      if(response.data.isPresential) setPresential(true);
    }, []);
  });

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

const StyledTypography = styled(Typography)`
  margin-bottom: 20px!important;
`;

const NoRegister = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80%;

  p{
    width: 60%;
    font-size: 20px;
    color: #8E8E8E;
    text-align: center;
  }
`;
