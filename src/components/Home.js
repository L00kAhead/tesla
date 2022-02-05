import React from "react";
import styled from "styled-components";
import Section from "./Section.js";
import carInfo from "../data/carInfo.json";
const Home = () => {
  const data = carInfo;
  console.log(data);
  return (
    <Container>
      {data.map((carData) => {
        return (
          <Section
            key={carData.id}
            id={carData.id}
            title={carData.title}
            description={carData.description}
            backgroundImage={carData.image}
            range={carData.range}
            time={carData.time}
            topSpeed={carData.topSpeed}
            peakPower={carData.peakPower}
            leftBtnText = {carData.leftBtnText}
            rightBtnText = {carData.rightBtnText}
          />
        );
      })}
    </Container>
  );
};

export default Home;

const Container = styled.div`
  height: 100vh;
`;
