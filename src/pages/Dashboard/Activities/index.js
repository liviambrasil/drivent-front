import styled from "styled-components";
import { useEffect, useState } from "react";
import useApi from "../../../hooks/useApi";
import { Typography } from "@material-ui/core";

import NotPaidMessage from "./NotPaidMessage";

export default function Activities() {
  const [presential, setPresential] = useState(false);
  const [isPaid, setIsPaid] = useState(null);
  const api = useApi();

  useEffect(() => {
    const promise = api.ticket.get();
    promise.then((response) => {
      setIsPaid(response.data.isPaid);
      if (response.data.isPresential) setPresential(true);
    }, []);
  });

  return (
    <>
      <StyledTypography variant="h4">Escolha de atividades</StyledTypography>
      {isPaid ? (
        !presential ? (
          <NoRegister>
            <p>
              Sua modalidade de ingresso não necessita escolher atividade. Você
              terá acesso a todas as atividades.
            </p>
          </NoRegister>
        ) : (
          <p>Renderizar atividades</p>
        )
      ) : (
        <NotPaidMessage />
      )}
      {}
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
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
