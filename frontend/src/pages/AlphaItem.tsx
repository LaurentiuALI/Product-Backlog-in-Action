import React from "react";
import { useParams } from "react-router-dom";

const AlphaItem = () => {
  const { id } = useParams<{ id: string }>();
  return <div>{id}</div>;
};

export default AlphaItem;
