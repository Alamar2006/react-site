import React from "react";
import styles from './MyPosts.module.css';
import Post from './Post/Post'
import {addPostActionCreator, updateNewPostCreator} from "../../../redux/profile-reducer";


const MyPosts = (props) => {
     let postsElements = props.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>);


  let newPostElement = React.createRef(); // элемент с ссылкой textarea

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }


  let onPostChange = () => {
    let text = newPostElement.current.value; // ссылка ссылается на нативный html элемент с value
    let action = updateNewPostCreator(text);
      props.dispatch(action);
  }
  // дибилизм ref(ов)



  return (
    <div className={styles.postsBlock} >
      <h3>My posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}/>
        </div>
        <div>
          <button onClick={addPost} >Add Post</button>
        </div>
      </div>
      <div className={styles.posts} >
        {postsElements}
      </div>
    </div>

  )
}

export default MyPosts;

// Переопределяем value <textarea> на onChange 
// <Post/>
