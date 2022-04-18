import React, {useState, useEffect} from "react";
import axios from "axios";

const CommentList = ({postId}) => {
  const [comments, setComments] = useState([])
  const [totalComment, setTotalComment] = useState(0);

  const fetchComments = async () => {
    const res = await axios.get(`http://localhost:4001/posts/${postId}/comments`);
    setComments(res.data)
    setTotalComment(res.data.length)
  }

  useEffect(()=>{fetchComments()},[])

  const renderedComments = comments.map( comment => {
    return <li key={comment.id}>{comment.content}</li>
  })
  return <div>
    <p><i>{totalComment+` comment${totalComment>1?'s':''}`}</i></p>
    <ul>{renderedComments}</ul>
  </div>
}

export default CommentList