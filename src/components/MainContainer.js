import React from "react";
import ButtonList from "./ButtonList";
import VideoCard from "./VideoCard";

const MainContainer = () => {
  return (
    <div className="shadow-lg p-5 w-full">
      <ButtonList />
      <div className="flex flex-wrap">
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </div>
    </div>
  );
};

export default MainContainer;
