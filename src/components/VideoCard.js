import React from "react";
const VideoCard = ({info}) => {
  const textStyle = {
    overflow:"hidden",
    whiteSpace:"nowrap",
    textOverflow:"ellipsis",
    width:"300px",
  };

 const {snippet,statistics} = info;
  const {channelTitle,title,thumbnails} = snippet;
  return (
    <div className="p-2 my-2 mx-2 w-80 h-80 shadow-lg cursor-pointer hover:bg-gray-100">
      <img src={thumbnails.medium.url} alt="thumbnails" className="rounded-lg w-82"/>
      <ul>
        <li className="py-2 font-bold" style={textStyle}>{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} Views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
