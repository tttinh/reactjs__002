import './App.css';
import Header from './component/Header';
import Task from './component/Task';

function App() {
  return (
    <div className='container'>
      <Header />
      <Task/>
      <Task/>
      <Task/>
    </div>
  );
}

export default App;
