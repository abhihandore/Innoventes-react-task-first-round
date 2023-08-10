import { useNavigate } from 'react-router-dom';
import './App.css';
import Login from './pages/login';
import { useSelector } from 'react-redux';

function App() {
  return (
    <>
      <div className="container">
        <h1>Star Wars</h1>
        <Login />
      </div>
    </>
  );
}

export default App;
