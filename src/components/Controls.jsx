import "./Controls.css"
import PlayBack from "../functions/Playback"

let loop;

export default function Controls({ setIsPlaying, isPlaying, compiledRecording, }) {

    let isPlayBtn = !isPlaying && compiledRecording.length !== 0;
    let isPauseBtn = isPlaying && compiledRecording.length !== 0;

    const handlePlay = () => {
        setIsPlaying(true)
        let finishes = compiledRecording.map(note => {
            return note.stop
        })
        let lastNoteToEnd = Math.max(...finishes) - compiledRecording[0].start
        PlayBack(compiledRecording)
        loop = setInterval(() => {
            PlayBack(compiledRecording) 
        }, lastNoteToEnd + 10)
    }
    const handlePause = () => {
        setIsPlaying(false)
        clearInterval(loop)
    }
    

    return (
            <section className="play-pause">
                <div 
                    className={"play-btn" + (isPlayBtn? " enabled" : " disabled")} 
                    onClick={isPlayBtn? handlePlay : null}>
                    Play
                </div>

                <div className={"pause-btn" + (isPauseBtn? " enabled" : " disabled")} onClick={isPauseBtn? handlePause : null}>
                    Pause
                </div>
            </section>
    )
}