import React, { useState } from 'react'
import "./chat.css"
import EmojiPicker from 'emoji-picker-react'
const Chat = () => {
const [open,setOpen] = useState(false);
const [text,setText] = useState(false);

const handleEmoji = e =>{
  setText((prev) => prev + e.emoji);
  setOpen(false);
}
console.log(text);
  return (
    <div className='chat'>
      <div className="top">
        <div className="user">
          <img src="./public/avatar.png"/>
          <div className="texts">
            <span>Doctor Doom</span>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="icons">
          <img src="./public/phone.png"  />
          <img src="./public/video.png"  />
          <img src="./public/info.png" />
        </div>
      </div>
      <div className="center">
        <div className="message">
          <img src="./public/avatar.png"/>
          <div className="texts">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est dolorem alias ipsum, ab nostrum mollitia repudiandae omnis unde dolore, reiciendis at id quia accusantium odio consequuntur voluptas ullam iure facilis!

            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn141.picsart.com%2F359453660017211.png&f=1&nofb=1&ipt=92491ef443d3cf9ad5fbf93e3ec785661e7ca6241b17e56c6bccfc800bbf54f3&ipo=images"  />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est dolorem alias ipsum, ab nostrum mollitia repudiandae omnis unde dolore, reiciendis at id quia accusantium odio consequuntur voluptas ullam iure facilis!

            </p>
            
          </div>
        </div>
        <div className="message">
          <img src="./public/avatar.png"/>
          <div className="texts">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est dolorem alias ipsum, ab nostrum mollitia repudiandae omnis unde dolore, reiciendis at id quia accusantium odio consequuntur voluptas ullam iure facilis!

            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
      
          <div className="texts">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est dolorem alias ipsum, ab nostrum mollitia repudiandae omnis unde dolore, reiciendis at id quia accusantium odio consequuntur voluptas ullam iure facilis!

            </p>
            
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="./public/img.png"/>
          <img src="./public/camera.png"/>
          <img src="./public/mic.png"/>
        </div>
        <input type="text" placeholder="Type something..." 
        value={text}
        onChange={ e=> setText(e.target.value)}/>
        <div className="emoji">
          <img src="./public/emoji.png" onClick={() =>
             setOpen((prev) => !prev)}/>
        <div className="picker">
        <EmojiPicker open={open} onEmojiClick={handleEmoji}/>
        </div>
          
        </div>
        <button className='sendButton'>Send</button>
      </div>
     </div>
  )
}

export default Chat
