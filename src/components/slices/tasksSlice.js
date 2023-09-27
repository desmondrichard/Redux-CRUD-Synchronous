import {createSlice} from "@reduxjs/toolkit";

const initialState={ //can also be called as state:
    tasksList:[],
    selectedTask:{}
}

const tasksSlice=createSlice({
    name:'tasksSlice',
    initialState,
    reducers:{
       addTaskToList:(state,action)=>{
        const id=parseInt(Math.random()*100);
        let task={...action.payload,id}
        state.tasksList.push(task) //pushed title,desc,id
       
       },

       removeTaskFromList:(state,action)=>{ //used filter to filter out the specific id
        state.tasksList=state.tasksList.filter((task)=>task.id!==action.payload.id)// if we === it will filter all matching id's which is useless
       },

       updateTaskInList:(state,action)=>{
        state.tasksList=state.tasksList.map((task)=>task.id===action.payload.id?action.payload:task)
       },

       setselectedTask:(state,action)=>{
        state.selectedTask=action.payload
       }
       
    }
    }
)

export const {addTaskToList,removeTaskFromList,updateTaskInList,setselectedTask}=tasksSlice.actions;
export default tasksSlice.reducer