import './App.css';
import Header from './component/Header';
import Task from './component/Task';
import { useState } from 'react';
import NewTask from './component/NewTask';

function App() {
  let taskCount = 0;
  const [tasks, setTasks] = useState([]);
  const [showNewTask, setShowNewTask] = useState(false);

  const switchTaskReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const saveTask = (task) => {
    taskCount++;
    setTasks([...tasks, {id: taskCount, ...task}])
  };

  return (
    <div className='container'>
      <Header
        showNewTask={showNewTask}
        onClick={() => setShowNewTask(!showNewTask)}
      />
      {showNewTask && <NewTask saveTask={saveTask} />}
      {tasks.length > 0
        ? tasks.map((task, index) => (
            <Task
              key={index}
              data={task}
              onToggleReminder={switchTaskReminder}
              onDelete={deleteTask}
            />
          ))
        : 'You have no task!'}
    </div>
  );
}

export default App;
