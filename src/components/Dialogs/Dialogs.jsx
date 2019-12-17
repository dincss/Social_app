import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message'
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import {sendMessageActionCreator, updateNewMessageBodyCreator} from "../../redux/dialog-reducer";





const Dialogs = (props) => {

    let states = props.store.getState().dialogsPage;

    let dialogsElements = states.dialogs.map( d => <DialogItem name={d.name} id={d.id} />)
    let messagesElements = states.messages.map( m => <Message message={m.message}/>);
    let newMessageBody = states.newMessageBody;

    // let dialogsTextarea = React.createRef();
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageActionCreator())
    }
    let onNewMessageChange = (e) => {
        let text = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(text));
    }
    // console.log(text)


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={newMessageBody} onChange={onNewMessageChange}  /></div>
                    <div><button onClick={onSendMessageClick}>Add</button></div>
                </div>
            </div>
        </div>
    )

}


export default Dialogs;