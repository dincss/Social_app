import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {


    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.states.posts}
                     // test = {props.statess}
                     dispatch={props.dispatch}
                     newPostText={props.states.newPostText}/>
        </div>
    )
}

export default Profile;