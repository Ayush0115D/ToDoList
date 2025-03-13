import { createContext,useContext } from "react";
export const TodoContext=createContext({
    todos:[  //context and  redux ke functionality app.jsx me likhe jate
        {
    
        id:1,
        todo:"Todo msg",
        completed:false,
    }
    ],
     addTodo:(todo)=>{},  //methods and value...functionality app.jsx me likhege
     updatedTodo:(id,todo0)=>{},
     deleteTodo:(id) => {},
     toggleComplete:(id)=>{}
})


export const useTodo=()=>{
    return useContext(TodoContext)
}
export const Todoprovider=TodoContext.Provider