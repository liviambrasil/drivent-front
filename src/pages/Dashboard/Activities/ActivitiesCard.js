import { Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import styled from "styled-components";
import Button from "../../../components/Form/Button";
import useApi from "../../../hooks/useApi";

export default function ActivitiesCard({ startTime, endTime }) {
  console.log(startTime, "star");
  return(
    <>
      <Container>
        <Box> 
          <Local>Auditório Principal</Local> 
          <ActivityBox><div><p>Minecraf</p><br/> 20:30</div><div>icon</div></ActivityBox>
        </Box>
        <Box>
          <Local>Auditório Lateral</Local>
          <ActivityBox><div><p>Minecraf</p><br/> 20:30</div><div>icon</div></ActivityBox>
        </Box>
        <LastBox>
          <Local>Sala de Workshop</Local>
          <ActivityBox><div><p>Minecraf</p><br/> 20:30</div><div>icon</div></ActivityBox>
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
  justify-content: center;
  padding-top: 20px;
`;
const LastBox = styled.div`
  margin-top:20px;
  width: 288px;
  height:100%;
  background-color: white;
  border: 1px solid #EBEBEB;
  position: relative;
  display:flex;
  justify-content: center;
  padding-top: 20px;
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

const ActivityBox = styled.div`
  width: 265px;
  height: 79px;
  background-color: blue;
  background: #F1F1F1;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  p{
    font-weight: bold;
  }
  
`;
