import React, {useState} from "react";
import axios from "axios";

const CommentForm = ({postId}) => {
  const [comment, setComment] = useState('');
  const onSubmit = async (event) => {
    event.preventDefault();
    await axios.post(`http://posts.com/posts/${postId}/comments`, {content: comment});
    setComment('')
  }
  return <div>
    <form className="container" onSubmit={onSubmit}>
      <div className="form-group">
        <label>New Comment</label>
        <input type="text" className="form-control" value={comment} onChange={event => setComment(event.target.value)} />
        <button className="btn btn-primary" type="submit">Submit</button>
      </div>
    </form>
  </div>
}

export default CommentForm;