import React from 'react';
import "./details.css";
import { auth } from '../../lib/firebase';
import { useChatStore } from '../../lib/chatStore';
import { useUserStore } from '../../lib/userStore';
import { update } from 'firebase/database';
import { arrayRemove, arrayUnion, updateDoc } from 'firebase/firestore';
const Details = () => {
  const {  chatId,
    isLoading,
    isCurrentUserBlocked,
    isReceiverBlocked,
    changeBlock} = useChatStore();
  const handleBlock = async() => {
   if(!user) return;

   try{

      await updateDoc(userDocRef,{
        blocked: isReceiverBlocked ? arrayRemove(user.id) : arrayUnion(user.id),

      });
      changeBlock();
   }catch(err){
        console.log(err)
   }
  } 

  const { currentUser} = useUserStore();
    
  return (
    <div className='details'>
      <div className="user">
        <img src= {user?.avatar || "./avatar.png"}/>
        <h2>{user?.username}</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>{user.imgusername}</span>
            <img src="./public/arrowUp.png" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & Help!</span>
            <img src="./public/arrowUp.png" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared photos</span>
            <img src="./public/arrowUp.png" />
          </div>
        </div>
        <div className="photos">
          <div className="photoItem">
            <div className="photoDetail">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp2432879.jpg&f=1&nofb=1&ipt=f655680c92d5fc7e8893ae833abb44050537b9ad5af6743e6d5463adc1626b04&ipo=images"/>
            <span>photo_2024_2.png</span>

            </div>
            <img src="./public/download.png" className='icons'/>
          </div>
          <div className="photoItem">
            <div className="photoDetail">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp2432879.jpg&f=1&nofb=1&ipt=f655680c92d5fc7e8893ae833abb44050537b9ad5af6743e6d5463adc1626b04&ipo=images"/>
            <span>photo_2024_2.png</span>
            
            </div>
            <img src="./public/download.png" className='icons'/>
          </div>
          <div className="photoItem">
            <div className="photoDetail">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp2432879.jpg&f=1&nofb=1&ipt=f655680c92d5fc7e8893ae833abb44050537b9ad5af6743e6d5463adc1626b04&ipo=images"/>
            <span>photo_2024_2.png</span>
            </div>
            <img src="./public/download.png" className='icons'/>
          </div>
          
        </div>
        <div className="option">
          <div className="title">
            <span>Shared files</span>
            <img src="./public/arrowUp.png" />
          </div>
          
        </div>
        <button onClick ={handleBlock}>
          isCurrentUserBlocked ? "You are Blocked!" : "user Blocked" : "Block user"
        </button>
        <button className='logout' onClick={() => auth.signOut()}>Logout</button>
      </div>
    </div>
  )
}

export default Details;