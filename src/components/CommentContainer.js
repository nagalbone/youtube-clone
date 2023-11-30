import React from 'react'

const CommentContainer = () => {
  return (
    <div className='m-2 mx-20'>
      <h1 className='font-bold text-2xl'>Comments:</h1>
      <div className='flex p-3 bg-gray-100 rounded-lg'>
        <div>
        <img className="w-8 h-8" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKpSNyhAnMOKvwCEKlcAHvGtlY66rTVSPjZQ&usqp=CAU' alt='Comments' />
        </div>
        <div className='ml-2'>
        <h1>Name</h1>
        <p>Comments</p>
        </div>
      </div>
    </div>
  )
}

export default CommentContainer;