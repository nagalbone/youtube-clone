import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from "react-router-dom";
import CommentContainer from '../components/CommentContainer';
import LiveChat from '../components/LiveChat';
import { useState } from 'react';
import { addMessages } from '../utils/chatSlice';
const WatchPage = () => {
  const [message,setMessage] = useState("");
    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(closeMenu());
    },[]);
  return (
    <div className='flex flex-col w-full h-[600px]'>
      <div className='flex w-full'>
        <div className='m-2 mx-20'>
            <iframe  className='w-[1200px] h-[600px]' src={`https://www.youtube.com/embed/${searchParams.get("v")}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <LiveChat />
      </div>
     <div className='float-right mx-30 mr-7'> 
     <form onSubmit={(e)=>{
      e.preventDefault();
      dispatch(addMessages({"name":"Arvind","message":message}));
      setMessage("")
     }}>
     <button className='bg-gray-200 float-right px-2'>Send</button>
     <input type='text' className='border border-spacing-11 w-80 float-right' value={message} onChange={(e)=> setMessage(e.target.value)}/>
     </form>
     </div>
     <div className='w-[1360px]'>
     <CommentContainer />
     </div>
      
    </div>
  )
}

export default WatchPage;