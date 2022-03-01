import { useState } from "react";

const ShowList =({tasks,setTasks}) =>{
    //const[taskItem,setTaskItem] =useState("task-list");
    const Deleted =(id)=>{
        setTasks(tasks.filter(t=> t.id !== id));

    }
    const Completed = (e,t)=>{
        e.preventDefault();
        setTasks(tasks.map(task =>{
            if(task.id === t.id ){
                return {...task,isCompleted:!task.isCompleted}
            }
            else
            {
                return task;
            }
            
        }));
        
        console.log(tasks)
        
    }
    
    return(
        <div>
        {tasks.length >0 && tasks.map(t=>(
                t.id !=='' &&
                    <div className="complete-form" key = {t.id}>
                        <ul className ="task-list"><span style={{textDecoration: t.isCompleted ? "line-through" : "none"}}>{t.do}</span></ul>
                        <button onClick = {(e)=>Completed(e,t)}className ="complete-btn">Complete</button>
                        <button onClick = {()=>Deleted(t.id)}className ="delete-btn">Delete</button>                   
                    </div>
        ))}
       </div>
    );
}
    export default ShowList;
