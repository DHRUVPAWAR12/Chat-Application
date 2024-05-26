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
            <img src={addMode ?"../public/minus.png" : "../public/plus.png"} className='add'
            onClick={() => setAddMode((prev) => !prev)}
            />
        </div>
        <div className="item">
            <img src="../public/avatar.png"/>
            <div className="texts">
                <span>Doctor Doom</span>
                <p>HELLO</p>
            </div>
        </div>
        <div className="item">
            <img src="../public/avatar.png"/>
            <div className="texts">
                <span>Doctor Doom</span>
                <p>HELLO</p>
            </div>
        </div>
        <div className="item">
            <img src="../public/avatar.png"/>
            <div className="texts">
                <span>Doctor Doom</span>
                <p>HELLO</p>
            </div>
        </div>
        <div className="item">
            <img src="../public/avatar.png"/>
            <div className="texts">
                <span>Doctor Doom</span>
                <p>HELLO</p>
            </div>
        </div>
        <div className="item">
            <img src="../public/avatar.png"/>
            <div className="texts">
                <span>Doctor Doom</span>
                <p>HELLO</p>
            </div>
        </div>    <div className="item">
            <img src="../public/avatar.png"/>
            <div className="texts">
                <span>Doctor Doom</span>
                <p>HELLO</p>
            </div>
        </div>    <div className="item">
            <img src="../public/avatar.png"/>
            <div className="texts">
                <span>Doctor Doom</span>
                <p>HELLO</p>
            </div>
        </div>
        {addMode && <Adduser />}
    </div>
  );
};

export default ChatList