import {
  useHistory,
} from "react-router-dom";
import styled from "styled-components";

export default function ChooseTickets( { match } ) {
  const history=useHistory();
  return(
    <button onClick={() => history.push(`${match.path}/complete`)}> "exemplo parte da livia"</button>
  );
}
