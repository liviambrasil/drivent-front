import styled from "styled-components";
import useApi from "../../../hooks/useApi";
import { useEffect } from "react";
export default function Activities() {
  const api = useApi();
  
  useEffect(() => {
    api.activity.getActivities().then((response) => {
      console.log(response.data);
    });
  }, []);
  
  return (
    <>
      <Title>Ingresso e pagamento</Title>
      <Info>Ingresso escolhido</Info>
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
