import React from "react";
import styles from './Post.module.css';


const Post = (props) => {
    return (
      <div className={styles.item} >
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_LXcbFcFRPMYWSON04F48eZkvxzuLX8OXgQ&s" />
        <div>
          { props.message }
        </div>
      </div>
    )
}

export default Post;