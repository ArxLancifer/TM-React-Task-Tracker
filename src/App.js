import Header from "./components/Header";
import Tasks from "./components/Tasks";
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
        reminder: true
    },
])

// Delete Task
const deleteTask =(id)=>{
  console.log('delete', id)
}

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask}/>
    </div>
  );
}

export default App;
