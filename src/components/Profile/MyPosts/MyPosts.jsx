import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";



const MyPosts = (props) => {


    let postsElement = props.posts.map(p => <Post message={p.message} like={p.likesCount}/>)

    let newPostElement = React.createRef()

    let addPost = () => {

        // props.addPost();
        props.dispatch(addPostActionCreator());
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        // props.updateNewPostText(text)
        // console.log(props.test)
        props.dispatch(updateNewPostTextActionCreator(text))
    }

    return (

        <div className={s.postsBlock}>
            <h3>my post</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
                </div>
                <div>
                    <button onClick={addPost}>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>

    )
}

export default MyPosts;