import React from 'react'

const CommentContainer = () => {
  const commentsList = [
    {
      "name":"test name",
      "comments":"test comments for testing purpose",
      "replies":[{
        "name":"test name",
        "comments":"test comments for testing purpose",
        "replies":[]
      }]
    },
    {
      "name":"test name",
      "comments":"test comments for testing purpose",
      "replies":[{
        "name":"test name",
        "comments":"test comments for testing purpose",
        "replies":[{
          "name":"test name",
          "comments":"test comments for testing purpose",
          "replies":[{
            "name":"test name",
            "comments":"test comments for testing purpose",
            "replies":[]
          }]
        }]
      }]
    }
  ]
  return (
    <div className='m-2 mx-20'>
    <h1 className='font-bold text-2xl'>Comments:</h1>
    <CommentList commentsList={commentsList} />
    </div>
  )
}

const CommentList = ({commentsList})=>{
  return (
<>

    {
      commentsList.map((comment)=>{
        return(
        
        <div className='flex p-3 bg-gray-100 rounded-lg mt-2 border-l-4'>
          <div>
          <img className="w-8 h-8" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKpSNyhAnMOKvwCEKlcAHvGtlY66rTVSPjZQ&usqp=CAU' alt='Comments' />
          </div>
          <div className='ml-2'>
          <h1>{comment.name}</h1>
          <p>{comment.comments}</p>
          <CommentList commentsList={comment.replies} />
          </div>
        </div>
      )
      })
    }
    </>
  )
}

export default CommentContainer;