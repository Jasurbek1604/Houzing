import React, { useEffect, useState } from "react";
import { Container } from "./style";
import HouseCard from "../HouseCard";
import { useLocation } from "react-router-dom";

const Properties = () => {
  const [data, setData] = useState([]);

  const { search } = useLocation();

  useEffect(() => {
    fetch(`/api/v1/houses/list${search}`)
      .then((res) => res.json())
      .then((res) => setData(res?.data));
  }, [search]);
  return (
    <Container>
      {data?.map((value) => {
        return <HouseCard key={value.id} data={value} />;
      })}
    </Container>
  );
};

export default Properties;
