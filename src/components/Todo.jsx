import 'C:/Users/97798/Desktop/Ktmbees/todo/my-todo/src/index.css'


import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import  {faX,faPenToSquare} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

function Check(props){
    if (props.completed) {
        return <label htmlFor={props.id} className=" m-2 line-through font-normal">{props.name}</label> ;
    }else{
        return <label htmlFor={props.id} className=" m-2 normal font-normal">{props.name}</label>   ;
    }
}
function Todo(props){
    const[editing,setEditing] =useState(false);
    const[newName,setNewName] = useState(props.name);
    

    function handleChange(event){
        setNewName(event.target.value);
    }

    function handleSubmit(event){
        event.preventDefault();
        props.editTask(props.id,newName);
        setNewName("");
        setEditing(false);
    }
    const editTemplate = (
        <div>
            <form onSubmit={handleSubmit} className='flex flex-col'>
                <label className="font-light" htmlFor={props.id}>
                    New name for {props.name}
                </label>
                <div className='flex justify-between'>
                    <input type="text" name="task" id="task" className=" bg-input-box rounded-3xl h-9 p-3 text-sm font-light border-none" autoComplete='off' value={newName} onChange={handleChange}/>
                
                    <input type="submit" id ="submit" className=" w-20 bg-btn-color py-2  text-white text-sm font-light rounded-3xl " value="submit"/>
                    <button  className='delete'  onClick={()=>setEditing(false)}>
                                <FontAwesomeIcon icon={faX} style={{color: "#ff4400cf",}} />
                    </button>
                </div>
                
            </form>
        </div>
    )
    const viewTemplate = (
        <div className="flex justify-between mt-3">
            <div >
                <input 
                    type="checkbox"
                    className="cb" defaultChecked={props.completed} onChange={()=>props.completedTask(props.id)}/>
                <Check id = {props.id} completed={props.completed} name={props.name}/>
            </div>
            
            <div className='buttons flex justify-between w-10'>
                <button className='delete' onClick={()=>setEditing(true)} >
                    <FontAwesomeIcon icon={faPenToSquare} style={{color: "#ff4400cf",}} />
                </button>
                <button className='delete' onClick={()=>props.deleteTask(props.id)}>
                    <FontAwesomeIcon icon={faX} style={{color: "#ff4400cf",}} />
                </button>
            </div>
        </div>
    )
    return(
        <li>
            {editing?editTemplate:viewTemplate}
        </li>
    );
}

export default Todo;