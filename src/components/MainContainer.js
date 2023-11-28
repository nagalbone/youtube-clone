import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
const MainContainer = () => {
  return (
    <div className="shadow-lg p-5 w-full">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
