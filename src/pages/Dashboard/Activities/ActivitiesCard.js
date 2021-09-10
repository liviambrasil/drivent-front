import { useState } from "react";
import styled from "styled-components";
export default function ActivitiesCard() {
  const [activitie, setActivitie] = useState(null);
  //   function fetchActivitie() {
  //     activities.listActivities().then((r) => {
  //       setActivitie(r.data);
  //     });
  //   }
  
  return (
    <>
      <Container>
        <Box>
          <Event>event</Event>
        </Box>
        <Box>
          <Event>event</Event>
        </Box>
        <Box>
          <Event>event</Event>
        </Box>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 500px;
  height: 400px;
  border-radius: 5px;
  background-color: blue;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Box = styled.div`
  width: 140px;
  height: 300px;
  border-radius: 5px;
  background-color: black;
`;

const Event = styled.div`
  width: 140px;
  height: 300px;
  border-radius: 5px;
  background-color: pink;
`;
