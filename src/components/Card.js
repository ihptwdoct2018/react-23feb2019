import React from "react";

const Card = ({ titulo, director }) => {
  return (
    <div>
      <h2>{titulo}</h2>
      <p>Director: {director}</p>
    </div>
  );
};

export default Card;
