import React from 'react'
import { addVideos } from '../utils/videosSlice';
import { useDispatch } from 'react-redux';
import { YOUTUBE_QUERY_SEARCH_API } from '../utils/constants';

const Button = ({name}) => {
  const dispatch = useDispatch();

  const getSearchVideos = async (searchQuery) => {
    dispatch(addVideos([]));
    const data = await fetch(YOUTUBE_QUERY_SEARCH_API + searchQuery);
    const json = await data.json();
    dispatch(addVideos(json.items));
  };

  return (
    <button className="bg-gray-200 px-4 py-2 m-2 rounded-lg" onClick={()=>getSearchVideos(name)}>{name}</button>
  )
}

export default Button;