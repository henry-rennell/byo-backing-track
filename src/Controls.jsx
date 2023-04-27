

export default function Controls({ setIsRecording, isRecording}) {

    return (
        <div className="controls">
            <button>Play</button>
            <button onClick={setIsRecording(!isRecording)}>Record</button>
        </div>
    )
}