import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import  {faX} from '@fortawesome/free-solid-svg-icons'
function Todo(props){
    return(
        <li>
            <input 
                type="checkbox"
                    className="cb" defaultChecked={props.completed}/>
                    <label htmlFor={props.id}>{props.name}</label>
                    <button className='delete'>
                        <FontAwesomeIcon icon={faX} style={{color: "#ff4400cf",}} />
                    </button>
                    
                </li>
    );
}

export default Todo;