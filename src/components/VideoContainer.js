import React, { useEffect } from "react";
import { YOUTUBE_API_URL } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addVideos } from "../utils/videosSlice";
const VideoContainer = () => {
  // const [videos, setVideos] = useState([]);
  const dispatch = useDispatch();
  const videos = useSelector((state) => state.videos.getVideos);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API_URL);
    const result = await data.json();
    dispatch(addVideos(result.items));
  };

  return (
    <div className="flex flex-wrap">
      {videos.map((video) => {
        const id = typeof video.id === "object" ? video.id.videoId : video.id;
        return (
          <Link key={id} to={"watch?v=" + id}>
            <VideoCard info={video} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
