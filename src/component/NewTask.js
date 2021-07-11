import './NewTask.css'

const NewTask = () => {
  return (
    <form className='new-task-form'>
      <div className='form-control'>
        <label>Title</label>
        <input type='text' placeholder='Task Title' />
      </div>
      <div className='form-control'>
        <label>Date</label>
        <input type='text' placeholder='Task Date' />
      </div>
      <div className='form-control-check'>
        <label>Reminder</label>
        <input type='checkbox'/>
      </div>
      <input className='form-btn' type="submit" value="Save Task" />
    </form>
  );
};

export default NewTask;
