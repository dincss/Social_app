const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

 const profileReducer = (state, action) => {


     switch (action.type) {
         case ADD_POST:
             let newPost = {
                 id: 5,
                 message: state.newPostText,
                 likesCount: 0
             };
             state.posts.push(newPost);
             state.newPostText = '';
             break;
         case UPDATE_NEW_POST_TEXT:
             state.newPostText = action.newtext;
             break;
     }


     return state;
}


export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newtext: text
});



export default profileReducer;