import {
  useHistory,
} from "react-router-dom";
import styled from "styled-components";
import PaymentForm from "./creditCard";

export default function PaymentInfo( { match } ) {
  console.log("passou aqui");
  const history = useHistory();
  const ticketType = "Presencial";
  const locationType = "com Hotel";
  const totalPrice = "450";
  return(
    <>
      <Title>Ingresso e pagamento</Title>
      <Info>Ingresso escolhido</Info>

      <Card >
        <h3>{ticketType} + {locationType}</h3>
        <p>R$ {totalPrice}</p>
      </Card>

      <PaymentForm/>
      
    </>
  );
  
  // return(
  //   <div onClick={() => console.log(match)}>
  //    abaca
  //     <button onClick={() => history.push("dashboard/payment/complete")}>go to minha parte</button>
  //   </div> 
  // );
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
