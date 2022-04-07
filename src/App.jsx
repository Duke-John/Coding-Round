import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import {useState} from 'react';

function App() {
  let navigate = useNavigate();

  const [name, setName] = useState('');
  const handle = () => {
      localStorage.setItem('Name', name);
      let path = `/AnswerPage`;
      navigate(path);
    };

  return (
    <div>

    <h1>
    Area he visited Yesterday For Marketing

    </h1>


           <input
              placeholder="Area visited"
              value={name}
              onChange={(e) => setName(e.target.value)}
           />
    <button onClick={handle}>Next</button>

    </div>
  );
}

export default App;
