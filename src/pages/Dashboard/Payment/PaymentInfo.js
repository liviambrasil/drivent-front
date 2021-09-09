import { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import PaymentForm from "./creditCard";
import "react-credit-cards/es/styles-compiled.css";
import { AiFillCheckCircle } from "react-icons/ai";
import useApi from "../../../hooks/useApi";
import UserContext from "../../../contexts/UserContext";
import Button from "../../../components/Form/Button";

export default function PaymentInfo( { match, isPresential, isHotel, setIsHotel, total, paid, setPaid } ) {
  const ticketType = isPresential ? "Presencial" :"Online";
  const locationType = isHotel ? "com Hotel" : "sem Hotel";
  const totalPrice = total;
  const [disable, setDisable] = useState(true);
  const [isComplete, setIsComplete] = useState( {  } );

  const api = useApi();

  const { userData } = useContext(UserContext);
  
  window.addEventListener("keyup", function(e) {
    if(isComplete.name  && isComplete.number && isComplete.cvc && isComplete.expiry) {
      setDisable(false);
    }else{
      setDisable(true);
    }
  }); 

  function finishOrder() {
    const userId = userData.user.id;
    const promise = api.ticket.save({ userId, isPresential, isHotel: isHotel === null ? false : isHotel, isPaid: true });

    promise.then(() => {
      setPaid(true);
    });

    promise.catch(() => {
      alert("Você já adquiriu o seu ingresso");
      setPaid(true);
    });
  }

  return(
    
    <>
      <Title>Ingresso e pagamento</Title>
      <Info>Ingresso escolhido</Info>

      <Card >
        <h3>{ticketType} + {locationType}</h3>
        <p>R$ {totalPrice}</p>
      </Card>
      <Info>Pagamento</Info>

      {!paid
        ?<>
          <PaymentForm isComplete={isComplete}/>
  
          <Button disabled={disable} onClick={() => finishOrder()}>Finalizar pagamento</Button>
        </>
        :<ConfirmationContainer>
          <AiFillCheckCircle/> <h2><span>Pagamento confirmado!</span> <br/>
          Prossiga para escolha de hospedagem e atividades</h2>
        </ConfirmationContainer>
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
const Card = styled.div`
width: 290px;
height: 108px;
background-color: #FFEED2;
font-size: 16px;
color: #454545;
border-radius:20px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
margin-bottom: 10px;

 h3{
   margin-bottom:10px
 }

 p{
   font-size: 14px;
 }
`;

const ConfirmationContainer = styled.div`
display: flex;
font-size: 16px;
margin-top: 20px;
align-items: center;
margin-bottom: 30px;
  svg{
    width:50px;
    height: 50px;
    color: #36B853;
  }

  span{
    font-weight:bold;
  }
`;

