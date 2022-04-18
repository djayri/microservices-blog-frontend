import React, {useState} from "react";
import axios from 'axios';

const PostForm = () => {
  const [title, setTitle] = useState('');
  const onSubmit = async (event) => {
    event.preventDefault();
    await axios.post('http://localhost:4000/posts', {title})
    setTitle('')
    
  }
  return <div>
    <form className="container" onSubmit={onSubmit}>
      <div className="form-group">
        <label>Title</label>
        <input type="text" className="form-control" value={title} onChange={event => setTitle(event.target.value)} />
        <button className="btn btn-primary" type="submit">Submit</button>
      </div>
    </form>
  </div>
}

export default PostForm;