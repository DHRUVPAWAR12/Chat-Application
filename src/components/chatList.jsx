import React, { useState } from 'react'
import "./chatList.css"
import Adduser from './addUsers/adduser';
const ChatList = () => {
    const [addMode,setAddMode] = useState(false)
  return (
    <div className='chatList'>
        <div className="search">
            <div className="searchBar">
                <img src="../public/search.png" />
                <input type="text" placeholder="Search" />
            </div>
            {chats.map((chat) => ( // Loop through chat data
            <div className="item" key={chat.id}> {/* Use a unique key for each chat */}
              <img src="../public/avatar.png" alt="User avatar" />
              <div className="texts">
                    <span>{chat.name}</span>
                    <p>{chat.lastMessage}</p>
              </div>
            </div>
      ))}
      {addMode && <Adduser />}
    </div>
  );
};

export default ChatList;
