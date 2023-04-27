import { useState } from 'react';
import './App.css';
import Heading from "./components/Heading"
import Keyboard from "./components/Keyboard"
import Controls from './Controls';

function App() {
  const [isRecording, setIsRecording] = useState(false)
  const [recording, setRecording] = useState([])

  return (
    <div className="App">
      <Heading />
      <Keyboard />
    </div>
  );
}

export default App;
