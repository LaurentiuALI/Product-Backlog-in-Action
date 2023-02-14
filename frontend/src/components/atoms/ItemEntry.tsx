import React from "react";
import { useNavigate } from "react-router-dom";

const ItemEntry = (props: any) => {
  const navigate = useNavigate();
  return (
    <div
      className="flex items-center justify-evenly border-b-2 border-primary-100 h-20"
      onClick={() => navigate(`/${props.item._id}`)}
    >
      <h1>{props.item.UID}</h1>
      <h2>{props.item.name}</h2>
      <h3>{props.item.storyPoints}</h3>
      <h4>{props.item.state}</h4>
    </div>
  );
};

export default ItemEntry;
