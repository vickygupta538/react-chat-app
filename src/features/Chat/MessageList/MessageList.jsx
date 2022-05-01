import React from 'react'
import styles from './MessageList.module.scss'
import moment from 'moment'
import cx from 'classnames'
import { Message } from '../Message/Message'




export const MessageList = (props) => {
   
    const {messages, autoMessage, day} = props;
        
    
     return (
         <>
         <div className={styles.day}><div>{day}</div></div>
         
        <div>
            { messages && messages.length > 0 &&  messages.map(message => {
                return <Message {...message} autoMessage={autoMessage} key={message.messageId} />
            })
            }
        </div>
     </>
    )
}
