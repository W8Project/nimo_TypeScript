import { configureStore } from "@reduxjs/toolkit";
import allTodos from "../modules/allTodos";
import dateTodos from '../modules/dateTodos';
import timer from "../modules/timer";
import category from '../modules/category';
import updateDate from '../modules/searchDate';
import socket from "../modules/socket";

const store = configureStore({
  reducer: {
    updateDate,
    allTodos,
    dateTodos,
    category,
    timer,
    socket,
    
  
  } 
});
export type RootState = ReturnType<typeof store.getState>
export default store;
