import CompileRecording from "../functions/CompileRecording"
import "./RecordingControls.css"

export default function RecordingControls({setCompiledRecording, setRecording, recording, setReleaseTime, releaseTime, compiledRecording, isPlaying }) {
    let isSetButton = compiledRecording.length === 0; 
    let isResetButton = !isPlaying
    
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

    return (
        <section className="recording">
            <p>Recording Controls:</p>
            <div className="recording-btns">
                <div className={"set-recording" + (isSetButton? " enabled" : " disabled")} onClick={isSetButton? handleCompile: null}>Set</div>
                <div className={"reset-recording"  + (isResetButton? " enabled" : " disabled")} onClick={handleReset}>Reset</div>
            </div>
        </section>

    )

}