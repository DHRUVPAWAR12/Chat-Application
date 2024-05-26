import List from './components/list/list';
import Chat from './components/chat/chat';
import Details from './components/details/details';
import Login from './components/Login/Login';
import Notification from './components/notification/notification';
import { useEffect } from 'react';
import { auth } from './lib/firebase';
import { useUserStore } from './lib/userStore';
import { onAuthStateChanged } from 'firebase/auth';

const App = () =>{
  const {currentUser,isLoading,fetchUserInfo} = useUserStore();
 
  useEffect(() =>{
    const unSub = onAuthStateChanged(auth, (user) =>{
      fetchUserInfo(user,uid)

    });

  return () =>{
    unSub();
    
  };
 },[fetchUserInfo]);
 console.log(currentUser);
 if(isLoading) return <div className="loading">Loading...</div>
  return (
    <div className="container">
      {
        currentUser ?(
          <>
          <List/>
          <Chat/>
          <Details/>
          </>
        ) : (
          <Login/>
        )
      }
        <Notification />
    </div>
  )
}
export default App
