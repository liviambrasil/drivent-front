import Typography from "@material-ui/core/Typography";
import { useState } from "react";
import styled from "styled-components";

import Rooms from "./Rooms";
import HotelSelection from "./HotelSelection";

export default function Hotel() {
  const [selectedHotel, setSelectedHotel] = useState(null);

  return (
    <>
      <StyledTypography variant="h4">
        Escolha de hotel e quarto
      </StyledTypography>
      <Title>Primeiro, escolha seu hotel</Title>

      <HotelSelection
        selectedHotel={selectedHotel}
        setSelectedHotel={setSelectedHotel}
      />
      <Rooms hotelId={selectedHotel} />
    </>
  );
}

const StyledTypography = styled(Typography)``;

const Title = styled.p`
  color: #8e8e8e;
  font-size: 20px;
  margin: 36px 0;
`;
