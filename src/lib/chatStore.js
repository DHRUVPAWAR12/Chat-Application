import { doc, getDoc } from 'firebase/firestore';
import { create } from 'zustand';
import { db } from './firebase';

export const useChatStore = create((set) => ({
    chatId : null,
    isLoading:true,
    isCurrentUserBlocked
    :false,
    
    changeChat: (chatId,user) =>{
      const currentUser = useUserStore?.getState()?.currentUser;
      if(user.blocked.includes(currentUser.id)){
          return set({
          chatId,
          user: null,
          isCurrentUserBlocked:false,
          isCurrentUserBlocked:false,
      });
      }
  
      if(currentUser.blocked.includes(user.id)){
          return set({
          chatId,
          user: user,
          isCurrentUserBlocked:false,
          isCurrentUserBlocked:true,
      });
      }
      else if(currentUser.blocked.includes(user.id)){
      return set({
          chatId,
          user:user,
          isCurrentUserBlocked:false,
          isCurrentUserBlocked:true,
      })
  } else{
      set({
          chatId,
          user,
          isCurrentUserBlocked:false,
          isCurrentUserBlocked:false,
        })
  
  }
  changeBlock: () => {
    set((state) => ({...state, isReceiverBlocked: !state.isReceiverBlocked}) )
  }
  
     }}
    )
);
