import { useState } from 'react';

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
          <input type="text" name="task" id="task" autoComplete='off' value={name} onChange={handleChange}/>
          <input type="submit" id ="submit" value="submit"/>
        </form>
    )
}

export default Form;