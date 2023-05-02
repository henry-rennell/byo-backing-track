import { useState } from 'react';
import './App.css';
import Heading from "./components/Heading"
import Keyboard from "./components/Keyboard"
import Controls from './components/Controls';
import RecordingControls from './components/RecordingControls';

function App() {
  const [keysPressed, setKeysPressed] = useState([])
  const [recording, setRecording] = useState([])
  const [compiledRecording, setCompiledRecording] = useState([])
  const [isPlaying, setIsPlaying] = useState(false)
  


  return (
    <div className="App">
      <Heading />
      <Keyboard 
        keysPressed={keysPressed} 
        setKeysPressed={setKeysPressed}  
        setRecording={setRecording}
        recording={recording}
        setCompiledRecording={setCompiledRecording}
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
          compiledRecording={compiledRecording}
          isPlaying={isPlaying}
        />
      </div>
    </div>
  );
}

export default App;
