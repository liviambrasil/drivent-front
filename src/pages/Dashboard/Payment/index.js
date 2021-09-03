import { useContext } from "react";
import {
  Switch,
  Route,
  Redirect,
  useRouteMatch,
  useHistory,
  BrowserRouter as Router
} from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";

import ChooseTickets from "./ChooseTickets";
import PaymentInfo from "./PaymentInfo";

export default function Payment() {
  const match = useRouteMatch();
  const [isPresential, setIsPresential] = useState(null);
  const [isHotel, setIsHotel] = useState(null);
  const [total, setTotal] = useState(0);
  console.log(match);
  return(
    
    <Router>
      <Switch>
        <Route path={`${match.path}/ticket`} exact>
          <ChooseTickets match={ match } isPresential={isPresential} setIsPresential={setIsPresential} 
            isHotel={isHotel} setIsHotel={setIsHotel} total={total} setTotal={setTotal}/>
        </Route>

        <Route path={`${match.path}/complete`} exact>
          <PaymentInfo isPresential={isPresential} isHotel={isHotel} total={total} />
        </Route>
        
        <Route path={`${match.path}`}>
          <Redirect to={`${match.url}/ticket`} />
        </Route>
      </Switch>
    </Router>  
    
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
