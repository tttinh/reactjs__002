import { FaTimes } from 'react-icons/fa';
import './Task.css'

const Task = () => {
  return (
    <div className='task-wrapper toggle-reminder'>
      <div className='task-title'>
        <h3>Meeting at School</h3>
        <FaTimes color='red' cursor='pointer'></FaTimes>
      </div>
      <h4>Feb 6th at 1:30pm</h4>
    </div>
  );
};

export default Task;
