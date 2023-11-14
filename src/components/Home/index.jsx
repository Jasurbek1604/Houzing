import React from "react";
import { Container } from "./style";
import CarouselComponent from "../Carousel";
import HouseCard from "../HouseCard";

const Home = () => {
  return (
    <Container>
      <CarouselComponent />
      <HouseCard />
    </Container>
  );
};

export default Home;
