import { useEffect, useState } from 'react';
import './App.css';
import Heading from "./components/Heading"
import Keyboard from "./components/Keyboard"
import Controls from './Controls';
import CompileRecording from './functions/CompileRecording';

function App() {
  const [keysPressed, setKeysPressed] = useState([])
  const [recording, setRecording] = useState([])
  const [isRecording, setIsRecording] = useState(false)
  const [compiledRecording, setCompiledRecording] = useState([])
  const [releaseTime, setReleaseTime] = useState([])


  const handleCompile = () => {
    setIsRecording(!isRecording)
    setCompiledRecording(CompileRecording(recording, releaseTime))
  }
  const handleReset = () => {
    setRecording([])
    setReleaseTime([])
  }

  useEffect(()=> {
    console.log(compiledRecording)
  }, [compiledRecording ])

  return (
    <div className="App">
      <Heading />

      <Keyboard 
        keysPressed={keysPressed} 
        setKeysPressed={setKeysPressed} 
        recording={recording} 
        setRecording={setRecording} 
        isRecording={isRecording} 
        setIsRecording={setIsRecording} 
        releaseTime={releaseTime} 
        setReleaseTime={setReleaseTime}
        compiledRecording={compiledRecording}
      />

      <button onClick={handleCompile}>Compile Your Recording</button>
      <button onClick={handleReset}>Reset Recording</button>
    </div>
  );
}

export default App;
