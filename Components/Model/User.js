import {createModel} from '@rematch/core'

export const user = createModel()({
    state: [], // initial state
    reducers: {
      // handle state changes with pure functions
      addUser:(state,newUser)=>{
            const name = [ ...state,newUser]
            return name;
      },
      concate:(state,list)=>{
      const name = [...state.concat(list)]
      return name;
        

      },
      removeAll:(state)=>{
        return []
      },
      remove:(state,index)=>{
        console.log(index);
        return state.filter((user,indexs) => indexs !== index)
      }
    },
    effects: (dispatch) => ({
      // handle state changes with impure functions.
      // use async/await for async actions
     
        async addUserAsync() {
            let response = await fetch('https://www.balldontlie.io/api/v1/players').catch((e)=>{
              console.log(e);
            })
            let  data = await response.json()
           dispatch.user.concate(data.data);
        },
    
}),
   
 
});
    
    