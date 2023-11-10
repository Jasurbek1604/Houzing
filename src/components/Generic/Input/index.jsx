import React from "react";
import { Container } from "./style";

const Input = ({
  onChange,
  type,
  placeholder,
  name,
  value,
  defaultValue,
  width,
  height,
}) => {
  return (
    <Container
      onChange={onChange}
      name={name}
      value={value}
      defaultValue={defaultValue}
      placeholder={placeholder}
      type={type}
      width={width}
      height={height}
    />
  );
};

export default Input;
