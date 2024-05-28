import React, { useEffect, useRef, useState } from 'react'
import "./chat.css"
import EmojiPicker from 'emoji-picker-react'
import { arrayUnion, doc, onSnapshot, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import {chatId} from "../../lib/chatStore";
import upload from '../../lib/upload';
const Chat = () => {
  const [chat, setChat] = useState();
const [open,setOpen] = useState(false);
const [text,setText] = useState("");
const [messages, setMessages] = useState([]);
const [currentUser] = useState();
const {chatId,isCurrentUserBlocked,
  isReceiverBlocked} = useUserStore();
const {img, setImg} = useState({
  file:null,
  url:"",
});

const endRef = useRef(null)
useEffect(() =>{
  endRef.current?.scrollIntoView({behavior: "smooth"});
});
useEffect(() =>{
  const unSub = onSnapshot(doc(db,"chats",chatId),(res) =>{
    setChat(res.data());
  });
  return () =>{
    unSub();
  };
},[chatId]);

const handleEmoji = e =>{
  setText((prev) => prev + e.emoji);
  setOpen(false);
}
const handleImg =e =>{
  if(e.target.files[0]){
      setImg({
          file:e.target.files[0],
          url:URL.createObjectURL[e.target.files[0]]
      })
  }
  
}


const handleSend = async() =>{
  if(text === "") return;
  let imgUrl = null
  
  try{

    if(img.file){
      imgUrl = await upload(img.file);
    }

    await updateDoc(doc(db,"chats",chatId),{
      messages:arrayUnion({
        senderId: currentUser.id,
        text,
        createdAt: new Date(),
        ...(imgUrl && {img: imgUrl}),
      }),
    });
    const userIDs = [currentUser,id, user.id];
    userIDs.forEach(async (id) =>{
      const userChatRef = doc('db',"userchats",id)
      const userChatsSnapshot = await getDoc (userChatRef)
  
      if(userChatsSnapshot.exists()){
        const userChatsData = userChatsSnapshot.data()
        const chatIndex = userChatsData.findIndex(c=> c.chatId === chatId)
        userChatsData.chats[chatIndex].lastMessage = text
        userChatsData.chats[chatIndex].isSeen = id === currentUser.id ? true : false;
        userChatsData.chats[chatIndex].updatedAt = true;
  
        await updateDoc(userChatRef,{
          chats: userChatsData.chats,
        });
      }         
    })

  }catch(err){
    console.log(err)
  }setImg({
    file:null,
    url:"",
  });
  setText("");
};
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
        {chat.message?.map((message) => (
          <div className={message.senderId ===currentUser?.id ? "message own" : "message"} key={message?.createAt}>
            <div className="texts">
             { message.img && <img src={message.text}/>} 
             <p>
              {message.text}
             </p>
             <span>{message.ceatedAt}</span>
            </div>
          </div>
        ))}
        <div className="message">
          <img src="./public/avatar.png"/>
          <div className="texts">
            <p>
           

            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn141.picsart.com%2F359453660017211.png&f=1&nofb=1&ipt=92491ef443d3cf9ad5fbf93e3ec785661e7ca6241b17e56c6bccfc800bbf54f3&ipo=images"  />
            <p>
            

            </p>
            
          </div>
        </div>
        <div className="message">
          <img src="./public/avatar.png"/>
          <div className="texts">
            <p>
            

            </p>
            <span>1 min ago</span>
          </div>
        </div>
       { img.url && <div className="message own">
      
      <div className="texts">
        <img src={img.url} alt="" />
        
      </div>
    </div> } 
        <div ref={endRef}></div>
      </div>
      <div className="bottom">
        <div className="icons">
          <label htmlFor='file'>
            <img src="./img.png" alt="" />
          </label>
          <img src="./public/img.png"/>
          <input type="file" id="file" style={{display:"none"}} onChange={handleImg}/>
          <img src="./public/camera.png"/>
          <img src="./public/mic.png"/>
        </div>
        <input type="text" placeholder= {(isCurrentUserBlocked || isReceiverBlocked)?"you cannot send a message" : "Type something..."} 
        value={text}
        onChange={ (e)=> setText(e.target.value)}
        disabled = {isCurrentUserBlocked || isReceiverBlocked}
        />
        <div className="emoji">
          <img src="./public/emoji.png" onClick={() =>
             setOpen((prev) => !prev)}/>
        <div className="picker">
        <EmojiPicker open={open} onEmojiClick={handleEmoji}/>
        </div>
          
        </div>
        <button className='sendButton' onClick={handleSend} disabled = {isCurrentUserBlocked || isReceiverBlocked}>Send</button>
      </div>
     </div>
  )
}

export default Chat
