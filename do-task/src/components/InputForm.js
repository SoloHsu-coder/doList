import './inputForm.css';
import {useState} from 'react';
import uniqid from 'uniqid';
import ShowList from './ShowList';
const InputForm = ()=>{
    const [input,setInput] = useState("");
    const [tasks,setTasks] = useState([{
        id:'',
        do:'',
        isCompleted:false  
    }]);
    const onInputChange = (e)=>{
        setInput(e.target.value);
    }
    const Add = (event)=>{
        event.preventDefault();
        setTasks([...tasks,{id:uniqid(),do:input,isCompleted:false}]);
        
        console.log(tasks);
    }
    
    return(
        
        <form className = "input">
            <input type = "text" placeholder = "Task Title" value = {input} required onChange={onInputChange}/>
            <button onClick ={Add} type = "submit">Add</button>
            <ShowList tasks ={tasks} setTasks ={setTasks}/>
        </form>
            
    )
    
}
export default InputForm;