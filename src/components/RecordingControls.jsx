import "./RecordingControls.css"

export default function RecordingControls({setCompiledRecording, setRecording, recording, setReleaseTime, compiledRecording, isPlaying }) {
    let isSetButton = compiledRecording.length === 0; 
    let isResetButton = !isPlaying
    
    const handleCompile = () => {
        if(compiledRecording.length === 0) {
            let clean = recording.filter(note => note.duration !== 0)
        setCompiledRecording(clean)
        }
    }

    const handleReset = () => {
        setRecording([])
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