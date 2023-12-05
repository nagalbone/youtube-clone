import { createSlice } from "@reduxjs/toolkit";
import { CHAT_MESSAGES_LIMIT } from "./constants";
const chatSlice = createSlice({
    name:"chat",
    initialState:{
        messages:[]
    },
    reducers:{
        addMessages:(state,action)=>{
            state.messages.splice(CHAT_MESSAGES_LIMIT, 1);
            state.messages.unshift(action.payload);
        },
    }
});

export const {addMessages} = chatSlice.actions;
export default chatSlice.reducer;