import { createSlice, nanoid } from "@reduxjs/toolkit";

 
export const todoSlice = createSlice({
  name: "todo",
  initialState:{
    todos:[],
  },

  reducers: {
    addtodo: (state, action) => {
       const obj = {
        id: nanoid(),
        text:action.payload
        
      };
       state.todos.push(obj);
     },
    removetodos: (state, action) => {
      state.todos = state.todos.filter((data) => data.id !== action.payload);
    },
    updatetodos:(state,action)=>{
      const index = state.todos.findIndex(item => item.id === action.payload);
      const updatedState = [...state.todos];
      console.log(updatedState,">>>>>")
      return void(updatedState[index] = action.payload);      
                
    }
  },
});
export const { addtodo, removetodos,updatetodos } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
