import React from 'react'
import styles from './Message.module.scss'
import moment from 'moment'
import cx from 'classnames'



const getOptionedMessage = (options, autoMessage) => {
    return options.map((option, index) => {
        return <div className={styles.option} key={index}>
           { option.optionText === 'Request a call' ? <div>
            <div className={styles.text} onClick={autoMessage}>{option.optionText}</div>
           </div> : 
            <div className={styles.text}>{option.optionText}</div>}
            <div className={styles.subtext}>{option.optionSubText}</div>
        </div>
    })
}

const getTextMessage = (message, timestamp) => {
    return <>
            <div className={styles.message}>{message}</div>
            <div className={styles.timestamp}>{moment(timestamp).fromNow(true)}</div>
        </>
}

export const Message = (props) => {
   
    const { message, timestamp, sender, messageType = 'text', options, autoMessage } = props
        
    
     return (
        <div className= {cx(styles.container, {
            [styles.left] : sender === 'BOT',
            [styles.right] : sender === 'USER'
        })}>
            {messageType === 'text' && getTextMessage(message, timestamp)}
            {messageType === 'optionedMessage' && getOptionedMessage(options, autoMessage)}
        </div>
    )
}
