import './Button.css';

const Button = ({ text, bkgColor, onClick }) => {
  return <button className='tt-button' style={{backgroundColor: bkgColor}} onClick={onClick}>{text}</button>;
};

export default Button;
