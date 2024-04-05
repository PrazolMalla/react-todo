import './style.css'
import Todo from './components/Todo'
import { useState } from 'react'
import Form from './Form'
import { nanoid } from 'nanoid'
function App(props){
  const [tasks, setTasks] = useState(props.tasks);
  function addTask(name) {
    const newTask = { id: `todo-${nanoid()}`, name:name, completed: false};
    setTasks([...tasks, newTask]);
  }

  function deleteTask(id){
    const remainingTasks = tasks.filter((task) => id!== task.id);
    setTasks(remainingTasks)
  }

  function completedTask(id){
    const updateTask = tasks.map((task)=>{
      if(id === task.id){
        return {...task,completed:!task.completed};
      }
      return task;
    });
    setTasks(updateTask);
  }

  function editTask(id,newName){
    const editedTask = tasks.map((task)=>{
      if(id === task.id){
        return{...task,name:newName};
      }
      return task;
    });
    setTasks(editedTask);
  }

  const taskList = tasks?.map((task) => (
    <Todo 
    id={task.id} 
    name={task.name} 
    completed ={task.completed}
    key={task.id}
    deleteTask = {deleteTask}
    completedTask = {completedTask}
    editTask = {editTask}
    />
  ));
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


