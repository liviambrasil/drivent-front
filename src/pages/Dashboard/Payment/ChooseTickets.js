import { Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Button from "../../../components/Form/Button";
import useApi from "../../../hooks/useApi";

export default function ChooseTickets( { match, isPresential, setIsPresential, isHotel, setIsHotel, total, setTotal, setPaid } ) {
  const [isRegistered, setIsRegistered] = useState(false);
  console.log(match);
  const history = useHistory();
  const api = useApi();

  useEffect(() => {
    api.enrollment.getPersonalInformations().then((response) => {
      if(response.data) setIsRegistered(true);
    });
  }, []);

  useEffect(async() => {
    const promise = api.ticket.get();
    promise.then(response => {
      if(response.data) {
        setIsPresential(response.data.isPresential);
        setIsHotel(response.data.isHotel);
        setPaid(true);
        history.push(`${match.path}/complete`);
      }
    });
  }, []);

  useEffect(() => {
    if(isPresential && isHotel) setTotal(600);
    if(isPresential && !isHotel) setTotal(250);
    if(!isPresential) setTotal(100);
  }, [isPresential, isHotel]);

  return(
    <>
      <StyledTypography variant="h4">Ingresso e pagamento</StyledTypography>

      {isRegistered

        ?<>
          <Text>Primeiro, escolha sua modalidade de ingresso</Text>
          <Selection>
            <Presential onClick={() => setIsPresential(isPresential === null ? true : !isPresential)} isPresential={isPresential}>
              <h1>Presencial</h1>
              <p>R$ 250</p>
            </Presential>
            
            <Online onClick={() => setIsPresential(isPresential === null ? false : !isPresential)} isPresential={isPresential}>
              <h1>Online</h1>
              <p>R$ 100</p>
            </Online>
          </Selection>

          {isPresential === true 
            ? <>
              <Text>Ótimo! Agora escolha sua modalidade de hospedagem</Text>

              <Selection>

                <NoHotel onClick={() => setIsHotel(isHotel === null ? false : !isHotel)} isHotel={isHotel}>
                  <h1>Sem Hotel</h1>
                  <p>+ R$ 0</p>
                </NoHotel>

                <Hotel onClick={() => setIsHotel(isHotel === null ? true : !isHotel)} isHotel={isHotel}>
                  <h1>Com hotel</h1>
                  <p>+ R$ 350</p>
                </Hotel>

              </Selection>
            </>
            : <> </>
          }

          {(isPresential === true && isHotel !== null) || isPresential === false
            ? <>
              <Text>Fechado! O total ficou em <span>R$ {total}</span>. Agora é só confirmar:</Text>
              <Button onClick={() => history.push(`${match.path}/complete`)} children="RESERVAR INGRESSO"></Button>
            </>
            : <> </>
          }
        </>
        : <NoRegister>
          <p>Você precisa completar sua inscrição antes de prosseguir pra escolha de ingresso</p>
        </NoRegister>
      }
      
    </>
  );
}

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

const Text = styled.p`
  font-size: 20px;
  color: #8E8E8E;
  margin-bottom: 17px;
  span{
    font-weight: bold;
  }
`;

const StyledTypography = styled(Typography)`
  margin-bottom: 20px!important;
`;

const Selection = styled.div`
  display:flex;
`;

const Card = styled.div`
  width: 145px;
  height: 145px;
  font-size: 16px;
  color: #454545;
  border-radius:20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 24px 44px 0;
  border: 1px solid #CECECE;

  h1{
    margin-bottom: 5px
  }

  p{
    font-size: 14px;
    color: #8E8E8E;
  }
`;

const Presential = styled(Card) `
  background-color: ${props => props.isPresential === true ? "#FFEED2" : "#fff"};
  border: ${props => props.isPresential === true ? "none" : "1px solid #CECECE"};
`;

const Online = styled(Card) `
  background-color: ${props => props.isPresential === false ? "#FFEED2" : "#fff"};
  border: ${props => props.isPresential === false ? "none" : "1px solid #CECECE"};
`;

const Hotel = styled(Card) `
  background-color: ${props => props.isHotel === true ? "#FFEED2" : "#fff"};
  border: ${props => props.isHotel === true ? "none" : "1px solid #CECECE"};
`;

const NoHotel = styled(Card) `
  background-color: ${props => props.isHotel === false ? "#FFEED2" : "#fff"};
  border: ${props => props.isHotel === false ? "none" : "1px solid #CECECE"};
`;
