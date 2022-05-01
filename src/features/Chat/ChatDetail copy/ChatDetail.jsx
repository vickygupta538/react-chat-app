import React from 'react'
import styles from './ChatDetail.module.scss'

import SendIcon from '@mui/icons-material/Send';


export const ChatDetail = (props) => {
    const {imageURL,orderId, title, id, latestMessageTimestamp, clickHandler, messageList} = props;
     return (
        <div className={styles.chatDetail}>
        <div className={styles.header}>
            
            <img src = {imageURL} alt = "" className={styles.img}/>
            <div className={styles.title}>{title}</div>
            
        </div>
        <div className={styles.content}>
            {
                messageList ? messageList.map(message => {
                    return <Message {...message} key={message.id}/>
                }) : 'Send a message to start chatting'
            }
        </div>
        <div className={styles.footer}>
            <div className={styles.footerWrapper}>
                <input type = "text" placeholder='Type a message...'/>
                <div className={styles.icon}>
                    <SendIcon />
                </div>
            </div>
            
            

        </div>
        </div>
    )
}
