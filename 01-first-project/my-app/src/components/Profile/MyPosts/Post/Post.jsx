import React from "react";
import styles from './Post.module.css';


const Post = () => {
    return (
      <div className={styles.item} >
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_LXcbFcFRPMYWSON04F48eZkvxzuLX8OXgQ&s" />
        Hello, I am from Post.jsx!
      </div>
    )
}

export default Post;