import styled from "styled-components";
import { useState } from "react";
import { BiLogIn } from "react-icons/bi"; 
import { AiOutlineCloseCircle } from "react-icons/ai";
export default function ActivityBox({ content, setRender }) {
  function duration(start, end) {
    let result = false;
    if(end.split(":")[0] - start.split(":")[0] > 1) {
      result = true;
    }
    return result;
  }
  return(
    <>
      {content.map((activitie, i) => {    
        let startTime = activitie?.start.split(" ")[3];
        let endTime = activitie?.end.split(" ")[3];
        console.log(startTime, endTime, "aqui");
        return( 
          <Box key= {i} duration = {duration(startTime, endTime)}>
            <div className="text">
              <p>{activitie?.name}</p><br/> {activitie?.start.split(" ")[3]} - {activitie?.end.split(" ")[3]}
            </div>
            <Line duration = {duration(startTime, endTime)}/>
            <IconBox duration = {duration(startTime, endTime)} vacancies={activitie?.vacancies}>
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
  height:${(props) => (props.duration ? "168px" : "78px")};
  background: #F1F1F1;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  margin-bottom:10px;
  position: relative;
  .text {
    position: ${(props) => (props.duration ? "absolute" : "static")};
    top: 12px;
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
  height: ${(props) => (props.duration ? "136px" : "100%")};
  background: #CFCFCF;
  margin-left: ${(props) => (props.duration ? "179px;" : null)}; 
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
  position: ${(props) => (props.duration ? "absolute" : "static")};
  right: ${(props) => (props.duration ? "15px" : null)}; ;
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
