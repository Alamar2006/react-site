import React from "react";
import styles from './MyPosts.module.css';
import Post from './Post/Post'


const MyPosts = (props) => {
     let postsElements = props.posts.map( p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>);

  let onAddPost = () => {
    props.addPost()
    // props.dispatch(addPostActionCreator());
  }

  let newPostElement = React.createRef(); 
  // элемент с ссылкой textarea
  let onPostChange = () => {
    let text = newPostElement.current.value; // ссылка ссылается на нативный html элемент с value
    props.updateNewPostText(text)
    
    // let action = updateNewPostCreator(text);
    // props.dispatch(action);
  }

  return (
    <div className={styles.postsBlock} >
      <h3>My posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}/>
        </div>
        <div>
          <button onClick={onAddPost} >Add Post</button>
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
