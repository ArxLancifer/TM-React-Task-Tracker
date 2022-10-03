import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from 'react'



function App() {

  const [tasks, setTasks] = useState([
    {
    id:1,
    text: 'Wake up',
    day: 'Oct 10th at 10am',
    reminder: true
    },
    {
    id:2,
    text: 'Make coffee',
    day: 'Oct 10th at 10:30am',
    reminder: true
    },
    {
    id:3,
    text: 'Start coding',
    day: 'Oct 10th at 11:00am',
    reminder: true
    },
    {
        id:4,
        text: 'Meeting',
        day: 'Oct 12th at 11:00am',
        reminder: false
    },
])


// Add Task

const addTask = (task)=>{
  const id = Math.floor(Math.random()*10000)+1
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
}
// Delete Task
const deleteTask =(id)=>{
  setTasks(tasks.filter((task) => task.id !== id))
}

// Toggle reminde

const toggleReminder = (id)=>{
  setTasks(tasks.map((task)=>task.id === id 
  ? {...task, reminder: !task.reminder} : task))
}

  return (
    <div className="container">
      <Header />
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ?
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />: <p>'No tasks to show'</p>}
    </div>
  );
}

export default App;
