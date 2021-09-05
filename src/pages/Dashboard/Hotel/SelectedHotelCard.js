import styled from "styled-components";
import TextSection from "./TextSection";

export default function SelectedHotel({ image, name }) {
  return (
    <>
      <Container>
        <Banner image={image} />
        <Title>{name}</Title>

        <TextSection title="Quarto reservado" content={}/>
        <TextSection title="Pessoas no seu Quarto" content={}/>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 196px;
  height: 264px;
  background-color: "#f1f1f1";
  margin: 10px 10px;
  border-radius: 10px;
  padding: 15px;
`;

const Banner = styled.div`
  height: 109px;
  width: 168px;
  border-radius: 5px;
  background: url(${({ image }) => image});
  background-size: cover;
`;

const Title = styled.p`
  color: #343434;
  font-size: 20px;
  margin: 10px 0;
`;
