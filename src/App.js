import React from "react";
import PostForm from "./PostsForm";
import PostsLists from "./PostsList"

const App = () => {
  return <div>
    <p>Posts</p>
    <PostForm />
    <PostsLists />
  </div>
}

export default App