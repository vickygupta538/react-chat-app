import React from 'react'
import styles from './ChatItem.module.scss'
import moment from 'moment'


export const ChatItem = (props) => {
    const {imageURL,orderId, title, latestMessageTimestamp, clickHandler} = props;
     return (
        <div className={styles.chatItem} onClick={() => clickHandler(props)}>
            <div className={styles.img}>
                <img src= {imageURL} alt="" />
            </div>
            <div className={styles.detials}>
                <div className={styles.header}>
                    <div className = {styles.title}>
                        {title}
                    </div>
                    <div className = {styles.timestamp}>
                        {moment(latestMessageTimestamp).format("DD/MM/YYYY")}
                    </div>
                </div>
                <div className={styles.orderId}>{orderId}</div>
                
            </div>
        </div>
    )
}
