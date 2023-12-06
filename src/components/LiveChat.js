import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { addMessages } from '../utils/chatSlice';
import { generateName, makeString } from '../helper/nameGenerator';
import { CHAT_API_FETCH_SPEED } from '../utils/constants';

const LiveChat = () => {
  const dispatch = useDispatch();
  const messages = useSelector((store)=> store.chat.messages);
  useEffect(()=>{
    const timer = setInterval(()=>{
      dispatch(addMessages({"name":generateName(),"message":makeString(15)}));
    },CHAT_API_FETCH_SPEED);

    return ()=> clearInterval(timer);
  },[]);

  return (
    <>
    <div className='p-2 m-2 border border-black-100 w-full bg-gray-100 h-[600px] overflow-y-scroll flex flex-col-reverse rounded-sm'>
      {
        messages.map((msg)=> <Messages name={msg.name} message={msg.message}/>)
      }
    </div>
    </>
  )
}

const Messages = ({name,message})=>{
    return(
        <div className='flex flex-row shadow-sm'>
        <img
          className="w-8 m-2"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKpSNyhAnMOKvwCEKlcAHvGtlY66rTVSPjZQ&usqp=CAU"
          alt="logo"
        />
        <span className='m-2'>{name}</span>
        <span className='m-2'> {message}</span>
        </div>
    )
}

export default LiveChat;