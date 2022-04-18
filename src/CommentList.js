import React from "react";

const CommentList = ({comments}) => {

  const renderedComments = comments.map( comment => {
    return <li key={comment.id}>{comment.content}</li>
  })
  return <div>
    <p><i>{comments.length+` comment${comments.length>1?'s':''}`}</i></p>
    <ul>{renderedComments}</ul>
  </div>
}

export default CommentList