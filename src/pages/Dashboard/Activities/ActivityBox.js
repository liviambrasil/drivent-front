import styled from "styled-components";
import useApi from "../../../hooks/useApi";
import { BiLogIn } from "react-icons/bi"; 
import { AiOutlineCloseCircle } from "react-icons/ai";
export default function ActivityBox({ content }) {
  console.log(content[0], content[0]?.start,  "content");
  return(
    <>
      <Box>
        <div className="text">
          <p>{content[0]?.name}</p><br/> {content[0]?.start.split(" ")[3]} - {content[0]?.end.split(" ")[3]}
        </div>
        <Line />
        <IconBox vacancies={content[0]?.vacancies}>
          {content[0]?.vacancies > 0 ? <SubscriptionIcon /> : <OutIcon /> }
          <p>{content[0]?.vacancies > 0 ? content[0]?.vacancies : "Esgotado" }</p>
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
  color: ${(props) => (props.vacancies > 0 ? "#078632" : "red")};
  width: 55px;
  height: 55px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
  p{
  font-size: 10px;
  margin-left: ${(props) => (props.vacancies > 0 ? "5px" : "0px")};
  margin-top:5px;
  color: ${(props) => (props.vacancies > 0 ? "#078632" : "red")};
  line-height: 11px;
  }
`;
const SubscriptionIcon = styled(BiLogIn)`
  font-size: 25px;
  cursor: pointer;
`;
const OutIcon = styled(AiOutlineCloseCircle)`
  font-size: 25px;
  cursor: pointer;
`;
