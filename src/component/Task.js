import { FaTimes } from 'react-icons/fa';
import './Task.css';

const Task = ({ data, onToggleReminder, onDelete }) => {
  return (
    <div className={`task-wrapper ${data.reminder && 'toggle-reminder'}`} onDoubleClick={() => onToggleReminder(data.id)}>
      <div className='task-title'>
        <h3>{data.title}</h3>
        <FaTimes color='red' cursor='pointer' onClick={() => onDelete(data.id)}></FaTimes>
      </div>
      <h4>{data.date}</h4>
    </div>
  );
};

export default Task;
