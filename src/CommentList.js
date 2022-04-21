import React from "react";

const CommentList = ({comments}) => {

  const renderedComments = comments.map( comment => {
    let content = comment.content;
    switch(comment.status) {
      case 'rejected':
        content += ' - this comment was rejected';
        break;
      case 'pending':
        content += ' - this comment is pending approval';
        break;
      default:
        break;
    }
    return <li key={comment.id}>{content}</li>
  })
  return <div>
    <p><i>{comments.length+` comment${comments.length>1?'s':''}`}</i></p>
    <ul>{renderedComments}</ul>
  </div>
}

export default CommentList