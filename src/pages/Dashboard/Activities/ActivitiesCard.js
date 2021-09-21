
import { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import ActivityBox from "./ActivityBox";
export default function ActivitiesCard({ activities }) {
  const [auditorioPrincipal, setAuditorioPrincipal] = useState([]);
  const [salaWorkshop, setSalaWorkshop] = useState([]);
  const [auditorioLateral, setAuditorioLateral] = useState([]);
  console.log(activities, "HEEEY");
  let audiPrincipalAux = [];
  let audiLateralAux = [];
  let salaWorkshopAux = []; 
  useEffect(() => {
    activities.forEach((a) => {
      const local = a.location["name"];
      if(local === "Auditório Principal") {
        audiPrincipalAux.push(a);
        setAuditorioPrincipal(audiPrincipalAux);
      }else if(local === "Auditório Lateral") {
        audiLateralAux.push(a); 
        setAuditorioLateral(audiLateralAux);
      }else if(local === "Sala de Workshop") {
        salaWorkshopAux.push(a);
        setSalaWorkshop(salaWorkshopAux);
      }
    });
  }, []);
  console.log(salaWorkshop, "LATERAL", auditorioPrincipal, "PRINCIPAL");

  return(
    <>
      <Container>
        <Box> 
          <Local>Auditório Principal</Local> 
          <ActivityBox content = {auditorioPrincipal}/>
        </Box>
        <Box>
          <Local>Auditório Lateral</Local>
          <ActivityBox content={auditorioLateral}/>
        </Box>
        <LastBox>
          <Local>Sala de Workshop</Local>
          <ActivityBox content={salaWorkshop}/>
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
  margin-top: 60px;
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
`;

const LastBox = styled.div`
  margin-top:20px;
  width: 288px;
  height:100%;
  background-color: white;
  border: 1px solid #EBEBEB;
  position: relative;
  display:flex;
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
  font-size: 17px
`;
