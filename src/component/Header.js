import Button from './Button';
import './Header.css';

const Header = ({ showNewTask, onClick }) => {
  return (
    <header className='tt-header'>
      <h1>Task Tracker</h1>
      <Button
        text={showNewTask ? 'Close' : 'New'}
        bkgColor={showNewTask ? 'red' : 'green'}
        onClick={onClick}
      />
    </header>
  );
};

export default Header;
