import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from "react-router-dom";
import CommentContainer from '../components/CommentContainer';
import LiveChat from '../components/LiveChat';
const WatchPage = () => {
    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(closeMenu());
    },[]);
  return (
    <div className='flex flex-col w-full h-[600px]'>
      <div className='flex w-full'>
        <div className='m-2 mx-20'>
            <iframe width="1200" height="600" src={`https://www.youtube.com/embed/${searchParams.get("v")}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <LiveChat />
      </div>
      <CommentContainer />
    </div>
  )
}

export default WatchPage;