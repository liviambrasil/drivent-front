import styled from "styled-components";
import useApi from "../../../hooks/useApi";
import { BiLogIn } from "react-icons/bi"; 

export default function ActivityBox() {
  return(
    <>
      <Box>
        <div className="text">
          <p>Minecraf: montando o PC ideal</p><br/> 09:00 - 10:00
        </div>
        <Line />
        <IconBox>
          <SubscriptionIcon />
          <p>27 vagas</p>
        </IconBox>
      </Box>
    </>
  );
}

const Box = styled.div`
  width: 265px;
  height: 79px;
  background: #F1F1F1;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  margin-bottom:10px;
  .text {
    color: #343434;
    font-size: 12px;
    height: 55px;
    width: 190px;
    line-height: 10px; 
      p {
      font-weight: bold;
    }
    }
`;
const Line = styled.div`
  width:1px;
  height: 60px;
  background: #CFCFCF;
`;
const IconBox = styled.div`
  color: #078632;
  width: 55px;
  height: 55px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
  p{
  font-size: 10px;
  margin-left: 5px;
  color: #078632;
  line-height: 11px;
  }
`;
const SubscriptionIcon = styled(BiLogIn)`
  font-size: 25px;
  cursor: pointer;
`;
