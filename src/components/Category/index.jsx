import React, { useEffect, useId, useState } from "react";
import Slider from "react-slick";
import CategoryCard from "../../components/CategoryCard";
import { Container } from "./style";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const [data, setData] = useState([]);
  const id = useId();
  const navigate = useNavigate();
  const settings = {
    className: "center",
    centerMode: true,
    infinity: true,
    slidesToShow: 3,
    centerPadding: "25px",
    speed: 500,
    adaptiveHeught: true,
    dots: true,
    arrow: true,
    appendDost: (dots) => <h1>{dots}</h1>,
  };

  useEffect(() => {
    fetch("/api/v1/categories/list")
      .then((res) => res.json())
      .then((res) => setData(res?.data));
  }, []);
  return (
    <Container>
      <Slider {...settings}>
        {data.map((value) => {
          return (
            <CategoryCard
              onClick={() => navigate(`/properties?category_id=${value.id}`)}
              key={id}
              data={value}
            />
          );
        })}
      </Slider>
    </Container>
  );
};
export default Category;
