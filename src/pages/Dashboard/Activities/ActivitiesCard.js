
import { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import ActivityBox from "./ActivityBox"; 

export default function ActivitiesCard({ activities }) {
  const [auditorioPrincipal, setAuditorioPrincipal] = useState([]);
  const [salaWorkshop, setSalaWorkshop] = useState([]);
  const [auditorioLateral, setAuditorioLateral] = useState([]);

  useEffect(() => {
    activities.forEach((a) => {
      const local = a.location["name"];
      if(local === "Auditório Principal") {
        setAuditorioPrincipal([...auditorioPrincipal, a]);
      }else if(local === "Auditório Lateral") {
        setAuditorioLateral([...auditorioLateral, a]);
      }else if(local === "Sala de Workshop") {
        setSalaWorkshop([...salaWorkshop, a]);
      }
    });
  }, [activities]);
  return(
    <>
      <Container>
        <Box> 
          <Local>Auditório Principal</Local> 
          <ActivityBox content = {auditorioPrincipal}/>
        </Box>
        <Box>
          <Local>Auditório Lateral</Local>
          <ActivityBox content={auditorioLateral} />
        </Box>
        <LastBox>
          <Local>Sala de Workshop</Local>
          <ActivityBox content={auditorioLateral}/>
        </LastBox>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 864px;
  height: 390px;
  display: flex;
  justify-content: center;
  margin-top: 70px;
  //white-space: nowrap;
`;

const Box = styled.div`
  margin-top:20px;
  width: 288px;
  height:100%;
  background-color: white;
  border: 1px solid #EBEBEB;
  border-right: 0.5px;
  position: relative;
  display:flex;
  align-items: center;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  white-space: nowrap;
  overflow: hidden;
`;

const LastBox = styled.div`
  margin-top:20px;
  width: 288px;
  height:100%;
  background-color: white;
  border: 1px solid #EBEBEB;
  position: relative;
  display:flex;
  //justify-content: center;
  align-items: center;
  padding-top: 20px;
  flex-direction: column; 
`;

const Local = styled.h1`
  color: gray;
  width: 100%;
  position:absolute;
  top:-30px;
  display: flex;
  justify-content: center;
  font-size: 17px;
`;
