import { useContext } from "react";
import {
  Switch,
  Route,
  Redirect,
  useRouteMatch,
  useHistory,
  BrowserRouter as Router
} from "react-router-dom";

import styled from "styled-components";

import ChooseTickets from "./ChooseTickets";
import PaymentInfo from "./PaymentInfo";

export default function Payment() {
  const match = useRouteMatch();
  console.log(match);
  const dados={}
  
  return(
    
    <Container>
      <Router>
        <Switch>
          <Route path={`${match.path}/livia`} exact>
            <ChooseTickets match={ match } />
          </Route>

          {/* <Route path={"dashboard/payment/complete"} exact>
            <PaymentInfo />
          </Route> */}

          <Route path={`${match.path}/complete`} exact>
            <PaymentInfo />
          </Route>
          
          <Route path={`${match.path}`}>
            <Redirect to={`${match.url}/livia`} />
          </Route>
        </Switch>
      </Router>  
    </Container>
  );
}

const Container = styled.div`
  padding: 30px;
  height: 100%;
  width: 100%;
  overflow-y: auto;

  @media (max-width: 600px) {
    height: calc(100vh - 80px);
    padding: 20px;
  }
`;
