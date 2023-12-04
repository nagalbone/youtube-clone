import React from 'react'

const LiveChat = () => {
  return (
    <>
    <div className='p-2 m-2 border border-black-100 w-full bg-gray-100 h-[600px] overflow-y-scroll'>
    <Messages name="Arvind" message="test Api"/>
    <Messages name="Arvind" message="test Api"/>
    <Messages name="Arvind" message="test Api"/>
    <Messages name="Arvind" message="test Api"/>
    <Messages name="Arvind" message="test Api"/>
    <Messages name="Arvind" message="test Api"/>
    <Messages name="Arvind" message="test Api"/>
    <Messages name="Arvind" message="test Api"/>
    <Messages name="Arvind" message="test Api"/>
    <Messages name="Arvind" message="test Api"/>
    <Messages name="Arvind" message="test Api"/>
    <Messages name="Arvind" message="test Api"/>
    <Messages name="Arvind" message="test Api"/>
    <Messages name="Arvind" message="test Api"/>
    <Messages name="Arvind" message="test Api"/>
    <Messages name="Arvind" message="test Api"/>
    <Messages name="Arvind" message="test Api"/>
    <Messages name="Arvind" message="test Api"/>
    <Messages name="Arvind" message="test Api"/>
    <Messages name="Arvind" message="test Api"/>
    <Messages name="Arvind" message="test Api"/>
    <Messages name="Arvind" message="test Api"/>
    <Messages name="Arvind" message="test Api"/>
    <Messages name="Arvind" message="test Api"/>
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