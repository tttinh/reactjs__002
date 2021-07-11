import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div style={{ marginTop: '30px', textAlign: 'center'}}>
            <p>Version 1.0.0</p>
            <Link to='/'>Go Back</Link>
        </div>
    )
}

export default About
