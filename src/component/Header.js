import Button from './Button';
import { useLocation } from 'react-router-dom';
import './Header.css';

const Header = ({ showNewTask, onClick }) => {
  const location = useLocation();

  return (
    <header className='tt-header'>
      <h1>Task Tracker</h1>
      {location.pathname === '/' && (
        <Button
          text={showNewTask ? 'Close' : 'New'}
          bkgColor={showNewTask ? 'red' : 'green'}
          onClick={onClick}
        />
      )}
    </header>
  );
};

export default Header;
