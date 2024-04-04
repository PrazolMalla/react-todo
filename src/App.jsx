import './style.css'
import Todo from './components/Todo'
import { useState } from 'react'
import Form from './Form'
function App(props){
  const [tasks, setTasks] = useState(props.tasks);
  function addTask(name) {
    const newTask = { id: "id", name:name, completed: false };
    setTasks([...tasks, newTask]);
  }
  const taskList = tasks?.map((task) => (
    <Todo 
    id={task.id} 
    name={task.name} 
    completed ={task.completed}
    key={task.id}
    />
  ));
  console.log(taskList)
    return(
      <div className='container'>
        <h1>To-Do List 📃</h1>
          <Form addTask = {addTask}></Form>
          <ul 
            role=''
            id='tasks'>
            {taskList}
          </ul>
        </div>
    );
}

export default App;


