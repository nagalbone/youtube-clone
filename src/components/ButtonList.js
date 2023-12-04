import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const buttonList = [
    "All",
    "Music",
    "Bollywood Music",
    "Old 90's mosic",
    "New Song",
    "Tamil Music",
    "Hollywood Movie",
    "South Movie",
    "Song",
  ];

  return (
    <div>
      {buttonList.map((name) => (
        <Button key={name} name={name} />
      ))}
    </div>
  );
};

export default ButtonList;
