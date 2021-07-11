import Button from './Button';
import './Header.css';

const Header = ({onClick}) => {
  return (
    <header className='tt-header'>
      <h1>Task Tracker</h1>
      <Button text='Add' bkgColor='green' onClick={onClick}/>
    </header>
  );
};

export default Header;
