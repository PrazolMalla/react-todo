import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import  {faX,faPenToSquare} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

function Check(props){
    if (props.completed) {
        return <label htmlFor={props.id} className="underline">{props.name}</label> ;
    }else{
        return <label htmlFor={props.id} className="normal">{props.name}</label>   ;
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
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor={props.id}>
                    New name for {props.name}
                </label>
                <input type="text" name="task" id="task" autoComplete='off' value={newName} onChange={handleChange}/>
                <button  className='delete'  onClick={()=>setEditing(false)}>
                            <FontAwesomeIcon icon={faX} style={{color: "#ff4400cf",}} />
                </button>
                <input type="submit" id ="submit" value="submit"/>
            </form>
        </>
    )
    const viewTemplate = (
        <>
        <input 
                type="checkbox"
                    className="cb" defaultChecked={props.completed} onChange={()=>props.completedTask(props.id)}/>
                    <Check id = {props.id} completed={props.completed} name={props.name}/>
                    <div className='buttons'>
                        <button className='delete' onClick={()=>setEditing(true)} >
                            <FontAwesomeIcon icon={faPenToSquare} style={{color: "#ff4400cf",}} />
                        </button>
                        <button className='delete' onClick={()=>props.deleteTask(props.id)}>
                            <FontAwesomeIcon icon={faX} style={{color: "#ff4400cf",}} />
                        </button>
                    </div>
        </>
    )
    return(
        <li>
            {editing?editTemplate:viewTemplate}
        </li>
    );
}

export default Todo;