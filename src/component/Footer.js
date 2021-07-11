import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ marginTop: '30px', textAlign: 'center' }}>
      <p>Copyright &copy; 2021</p>
      <Link to='/about'>About</Link>
    </footer>
  );
};

export default Footer;
