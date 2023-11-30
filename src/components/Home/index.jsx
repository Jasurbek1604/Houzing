import React from "react";
import { Container } from "./style";
import CarouselComponent from "../Carousel";
import Category from "../Category";

const Home = () => {
  return (
    <Container>
      <CarouselComponent />
      <Category />
    </Container>
  );
};

export default Home;
