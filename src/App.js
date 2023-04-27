import { useState } from 'react';
import './App.css';
import Heading from "./components/Heading"
import Keyboard from "./components/Keyboard"
import Controls from './Controls';

function App() {
  const [keysPressed, setKeysPressed] = useState([])

  return (
    <div className="App">
      <Heading />
      <Keyboard keysPressed={keysPressed} setKeysPressed={setKeysPressed}/>
    </div>
  );
}

export default App;
