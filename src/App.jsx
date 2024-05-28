import List from './components/list/list';
import Chat from './components/chat/chat';
import Details from './components/details/details';
import Login from './components/Login/Login';
import Notification from './components/notification/notification';
import { useEffect, uid} from 'react';
import { auth } from './lib/firebase';
import { useUserStore } from './lib/userStore';
import { onAuthStateChanged } from 'firebase/auth';
import { chatStore } from './lib/chatStore';

const App = () =>{
  const {currentUser,isLoading,fetchUserInfo} = useUserStore();
  const {chatId} = chatStore();
 
  useEffect(() =>{
    const unSub = onAuthStateChanged(auth, (user) => {
      fetchUserInfo(user?.uid);
    });

  return () =>{
    unSub();
    
  };
 },[fetchUserInfo]);
console.log(currentUser);
 if(isLoading) return <div className="loading"> Loading...</div>;
  
  return (
    <div className="container">
      {
        currentUser ? (
          <>
          <List/>
          {chatId && <Chat/>}
          {chatId && <Details/>}
          </>
        ) : (
          <Login />
        )
      }
        <Notification />
    </div>
  )
}
export default App
