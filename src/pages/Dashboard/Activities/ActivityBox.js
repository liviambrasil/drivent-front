import styled from "styled-components";
import useApi from "../../../hooks/useApi";
import { BiLogIn } from "react-icons/bi"; 
import { AiOutlineCloseCircle } from "react-icons/ai";
export default function ActivityBox({ content }) {
  console.log(content, "content");
  return(
    <>{content.map((activitie) => {
      console.log(activitie?.name, "CHEGOU NO FOR");
      return( 
        <Box>
          <div className="text">
            <p>{activitie?.name}</p><br/> {activitie?.start.split(" ")[3]} - {activitie?.end.split(" ")[3]}
          </div>
          <Line />
          <IconBox vacancies={activitie?.vacancies}>
            {activitie?.vacancies > 0 ? <SubscriptionIcon /> : <OutIcon /> }
            <p>{activitie?.vacancies > 0 ? activitie?.vacancies : "Esgotado" }</p>
          </IconBox>
        </Box>
      );
    })}
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
  color: ${(props) => (props.vacancies > 0 ? "#078632" : "#CC6666")};
  width: 55px;
  height: 55px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
  //background-color: blue;
  p{
  font-size: 10px;
  margin-left: 5px;
  margin-top:5px;
  color: ${(props) => (props.vacancies > 0 ? "#078632" : "#CC6666")};
  line-height: 11px;
  }
`;
const SubscriptionIcon = styled(BiLogIn)`
  font-size: 25px;
  cursor: pointer;
`;
const OutIcon = styled(AiOutlineCloseCircle)`
  font-size: 22px;
  cursor: pointer;
  margin-left: 5px;
`;
