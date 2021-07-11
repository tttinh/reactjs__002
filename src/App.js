import './App.css';
import Header from './component/Header';
import Task from './component/Task';
import { useState } from 'react';
import NewTask from './component/NewTask';

const defaultTasks = [
  {
    id: 1,
    title: 'Learn React Crash Course.',
    date: 'Jul 11st at 2:30pm',
    reminder: true,
  },
  {
    id: 2,
    title: 'Cleanup the Room.',
    date: 'Jul 11st at 4:30pm',
    reminder: false,
  },
  {
    id: 3,
    title: 'Do Some Exercises.',
    date: 'Jul 11st at 5:30pm',
    reminder: true,
  },
  {
    id: 4,
    title: 'Prepare for Dinner.',
    date: 'Jul 11st at 6:30pm',
    reminder: false,
  },
];
function App() {
  const [tasks, setTasks] = useState(defaultTasks);
  const [showNewTask, setShowNewTask] = useState(false);

  const onToggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  }

  const onDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <div className='container'>
      <Header showNewTask={showNewTask} onClick={() => setShowNewTask(!showNewTask)}/>
      {showNewTask && <NewTask/>}
      {tasks.length > 0
        ? tasks.map((task, index) => (
            <Task
              key={index}
              data={task}
              onToggleReminder={onToggleReminder}
              onDelete={onDelete}
            />
          ))
        : 'You have no task!'}
    </div>
  );
}

export default App;
