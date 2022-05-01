
import React from 'react'
import { useEffect, useState, useRef } from 'react'
import { get } from '../../../API'
import { ChatDetail } from '../ChatDetail/ChatDetail';
import { ChatItem } from '../ChatItem/ChatItem';
import styles from './ChatList.module.scss'
import cx from 'classnames';


const url = 'https://my-json-server.typicode.com/codebuds-fk/chat/chats';

const filterList = (list,value) => {
    value = value.toLowerCase();
    return list.filter(item => {
        return item.title.substring(0,value.length).toLowerCase() === value ||
        item.orderId.substring(0,value.length).toLowerCase() === value;
    })
}

export const ChatList = () => {
    const [chatList, setChatList] = useState([]);
    const refChatList = useRef();
    const [chatDetail, setChatDetail] = useState();
    
    useEffect(() => {
        async function getChatList() {
            const response = await get(url);
            refChatList.current = response;
            setChatList(response);
        }

        getChatList()
  },[])

  const clickHandler = (chatItem) => {
    // console.log(chatItem);
    setChatDetail(chatItem);
  }

  const searchChat = (event) => {
    const value = event.target.value;
    const filteredChats = filterList(refChatList.current, value);
    setChatList(filteredChats);
  }
  
  
  return (
    <div className={styles.container}>
       
        <div  className={cx(styles.chatList , {
            [styles.withChatList]: !!chatDetail,
            
            })}
        >
            <div className={styles.header}>
                <h4 className={styles.heading}>Filter by Title/ Order Id</h4>
                <input type="text" className={styles.search} placeholder='Start typing to search...'
                onChange={searchChat}/>
            </div>
           
            {
                chatList.map(chat => {
                    return <ChatItem {...chat} clickHandler = {clickHandler} key={chat.id}/>
                })
            }
        </div>
        
        
        {
            chatDetail && <div className={styles.chatDetail}>  <ChatDetail {...chatDetail} /></div>
        }
        
   
   
    </div>
  )
}
