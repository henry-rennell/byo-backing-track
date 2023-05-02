import { useEffect, useState } from 'react';
import './App.css';
import Heading from "./components/Heading"
import Keyboard from "./components/Keyboard"
import Controls from './components/Controls';
import CompileRecording from './functions/CompileRecording';
import RecordingControls from './components/RecordingControls';

function App() {
  const [keysPressed, setKeysPressed] = useState([])
  const [recording, setRecording] = useState([])
  const [isRecording, setIsRecording] = useState(false)
  const [compiledRecording, setCompiledRecording] = useState([])
  const [releaseTime, setReleaseTime] = useState([])
  const [isPlaying, setIsPlaying] = useState(false)


  const handleCompile = () => {
    if(compiledRecording.length === 0) {
      setCompiledRecording(CompileRecording(recording, releaseTime))
    }
  }

  const handleReset = () => {
    setRecording([])
    setReleaseTime([])
    setCompiledRecording([])
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
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
      <div className="controls">
        <Controls 
          isPlaying={isPlaying} 
          setIsPlaying={setIsPlaying} 
          compiledRecording={compiledRecording} 
        />
        <RecordingControls 
          setCompiledRecording={setCompiledRecording}
          setRecording={setRecording}
          recording={recording}
          setReleaseTime={setReleaseTime}
          releaseTime={releaseTime}
          compiledRecording={compiledRecording}
          isPlaying={isPlaying}
        />
      </div>
    </div>
  );
}

export default App;
