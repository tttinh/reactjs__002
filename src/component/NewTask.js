import { useState } from 'react';
import './NewTask.css';

const NewTask = ({ saveTask }) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!title) {
      alert('Please add a task');
      return;
    }

    saveTask({ title, date, reminder });

    setTitle('');
    setDate('');
    setReminder(false);
  };

  return (
    <form className='new-task-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Title</label>
        <input
          type='text'
          placeholder='Task Title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Date</label>
        <input
          type='text'
          placeholder='Task Date'
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className='form-control-check'>
        <label>Reminder</label>
        <input
          type='checkbox'
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <input className='form-btn' type='submit' value='Save Task' />
    </form>
  );
};

export default NewTask;
