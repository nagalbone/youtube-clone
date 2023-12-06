import React from 'react'

const VideoShimmer = () => {
var div = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
  return (
    <>
    {div.map((d)=> <div className='p-2 my-2 mx-2 w-80 h-80 shadow-lg cursor-pointer hover:bg-gray-100'>
        <div className='h-[170px] rounded-lg w-82 bg-gray-300'></div>
        <div className='h-5 w-82 rounded-lg bg-gray-300 mt-3'></div>
        <div className='h-10 rounded-lg w-82 bg-gray-300 mt-3'></div>
    </div>)}
    </>
    
  )
}

export default VideoShimmer;