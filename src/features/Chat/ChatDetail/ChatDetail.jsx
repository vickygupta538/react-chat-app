import React, { useState, useEffect } from 'react'
import styles from './ChatDetail.module.scss'

import SendIcon from '@mui/icons-material/Send';
import moment from 'moment';
import { MessageList } from '../MessageList/MessageList';


const groupday = (messages) => {
    let byday={};
    messages.forEach(message  => {
        // let d = new Date(message['timestamp']);
        // d = Math.floor(d.getTime()/(1000*60*60*24));
        let d = moment(message['timestamp']).format('DD/MM/YYYY');
        byday[d]=byday[d]||[];
        byday[d].push(message);
    });

    // console.log('byday',JSON.stringify(byday));
    return byday
 }


export const ChatDetail = (props) => {
    const {imageURL, title, messageList} = props;

    const [messages, setMessages] = useState([...messageList]);

    const [message, setMessage] = useState('');

    const groupedMsg = groupday(messages);

    useEffect(() => {
        setMessages(messageList);
    },[messageList])


    const addMessage = (event) => {
        event.preventDefault()
        if(!message)
            return;

        setMessages([...messages, {
            messageId: messages.lenth,
            message: message,
            timestamp: Date.now(),
            sender: 'USER',
            messageType: 'text'
        }]);
        setMessage('');    
    }

    const addAutoMessage = () => {
        setMessages([...messages, {
            messageId: messages.lenth,
            message: 'I want a callback',
            timestamp: Date.now(),
            sender: 'USER',
            messageType: 'text'
        }]);
    }

     return (
        <div className={styles.chatDetail}>
        <div className={styles.header}>
            
            <img src = {imageURL} alt = "" className={styles.img}/>
            <div className={styles.title}>{title}</div>
            
        </div>
        <div className={styles.content}>
            {
                Object.keys(groupedMsg).length > 0 ? Object.keys(groupedMsg).map(day => {
                    return <MessageList messages = {groupedMsg[day]} key={day} day = {day} autoMessage={addAutoMessage}/>
                }) : (
                     <div className={styles.defaultMessage}>
                         <div>
                         Send a message to start chatting
                         </div>
                     </div>
                )
            }
        </div>
        <div className={styles.footer}>
            <div className={styles.footerWrapper}>
                <form onSubmit={addMessage}>
                    <input 
                        type = "text" 
                        placeholder='Type a message...'
                        value = {message}
                        onChange={(event) => setMessage(event.target.value)}
                        />
                    <div className={styles.icon}>
                        <button type = 'submit'><SendIcon onClick={addMessage}/></button>
                    </div>
                </form>
                
            </div>
            
            

        </div>
        </div>
    )
}
