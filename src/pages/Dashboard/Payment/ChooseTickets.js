import { Typography } from "@material-ui/core";
import {
  useHistory,
} from "react-router-dom";
import styled from "styled-components";
import { Title } from "../../../components/Auth";

export default function ChooseTickets( { match } ) {
  const history=useHistory();
  return(
    <>
      <StyledTypography variant="h4">Ingresso e pagamento</StyledTypography>
      <Text>Primeiro, escolha sua modalidade de ingresso</Text>
      <button onClick={() => history.push(`${match.path}/complete`)}> "exemplo parte da livia"</button>
    </>
  );
}

const Text = styled.p`
font-size: 20px;
color: #8E8E8E;
`;

const StyledTypography = styled(Typography)`
  margin-bottom: 20px!important;
`;

