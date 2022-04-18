import React, {useState, useEffect} from "react";
import axios from "axios";
import CommentForm from "./CommentForm"
import CommentList from "./CommentList";

const PostsList = () => {
  const [posts, setPosts] = useState([])
  
  const fetchPosts = async () => {
    const res = await axios.get('http://localhost:4000/posts');
    const resPosts = Object.values(res.data).map(({id, title}) => ({id, title}))
    setPosts(resPosts)
  }
  
  useEffect(()=>{fetchPosts()} , []);

  const renderedPosts = posts.map(post => {
    return <div 
      className="card" 
      style={{width: '30%', marginBottom:'20px'}}
      key={post.id}
    >
      <div className="card-body">
        <h3>{post.title}</h3>
        <CommentList postId={post.id} />
        <CommentForm postId={post.id} />
      </div>
    </div>
  })
  return <div className="d-flex flex-row flex-wrap justify-content-between">
    {renderedPosts}
  </div>
}

export default PostsList;