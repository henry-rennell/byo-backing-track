import "./Heading.css"

export default function Heading() {
    return (
        <div className="heading">
            <section className="headings">
                <h1>BYO Backing Track</h1>
                <p>Made By Henry Rennell</p>
            </section>
            <section>
                <h2>Instructions:</h2>
            <ul>
                <li>
                The Program will record from your first input.
                </li>
                <li>
                    You Can Reset Your Recording at any time using the <span className="red">RESET</span> button, after doing so, your next input will be the start of the new recording.
                </li>
                <li>
                    If you are happy with your recording: press the <span className="red">SET</span> button, the recording will end at the release of your last input
                </li>
                <li>
                    After Pressing <span className="red">SET</span>, press <span className="red">PLAY</span> to begin looping your recording and <span className="red">PAUSE</span> to stop after the track is complete.
                </li>
            </ul>
            </section>
        </div>
    )
}