import './App.css';
import Header from './component/Header';
import Task from './component/Task';
import { useState, useEffect } from 'react';
import NewTask from './component/NewTask';
import Footer from './component/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './component/About';

function App() {
  const [tasks, setTasks] = useState([]);
  const [showNewTask, setShowNewTask] = useState(false);

  useEffect(() => {
    const getTasks = async () => {
      const data = await fetchTasks();
      setTasks(data);
    };

    getTasks();
  }, []);

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    return data;
  };

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks');
    const data = await res.json();
    return data;
  };

  const updateTaskReminder = async (id) => {
    const task = await fetchTask(id);
    const updatingTask = { ...task, reminder: !task.reminder };

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatingTask),
    });

    const data = await res.json();

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );
  };

  const deleteTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    });
    //We should control the response status to decide if we will change the state or not.
    res.status === 200
      ? setTasks(tasks.filter((task) => task.id !== id))
      : alert('Error Deleting This Task');
  };

  const saveTask = async (task) => {
    const res = await fetch(`http://localhost:5000/tasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    });

    const data = await res.json();
    console.log(data);
    setTasks([...tasks, data]);
  };

  return (
    <div className='container'>
      <Router>
        <Header
          showNewTask={showNewTask}
          onClick={() => setShowNewTask(!showNewTask)}
        />
        <Route
          path='/'
          exact
          render={() => (
            <>
              {showNewTask && <NewTask saveTask={saveTask} />}
              {tasks.length > 0
                ? tasks.map((task) => (
                    <Task
                      key={task.id}
                      data={task}
                      onToggleReminder={updateTaskReminder}
                      onDelete={deleteTask}
                    />
                  ))
                : 'You have no task!'}
              <Footer />
            </>
          )}
        />
        <Route path='/about' component={About} />
      </Router>
    </div>
  );
}

export default App;
