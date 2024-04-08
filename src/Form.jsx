import { useState } from 'react';
import'./index.css';

function Form(props){
    const [name,setName]  = useState("");
    function handleChange(event){
        setName(event.target.value);
    }
    function handleSubmit(event){
        event.preventDefault();
        props.addTask(name);
        setName("");
    }
    return(
        <form onSubmit={handleSubmit}>
          <input className=" w-72 bg-input-box rounded-3xl h-9 p-3 text-sm font-light active:border-none" type="text" name="task"  autoComplete='off' value={name} onChange={handleChange} required/>
          <input className=" bg-btn-color py-2 px-6 text-white text-sm font-light rounded-3xl ml-[-2rem]" type="submit" id ="submit" value="submit"/>
        </form>
    )
}

export default Form;