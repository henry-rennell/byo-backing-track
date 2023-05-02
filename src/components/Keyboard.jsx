import "./Keyboard.css"
import Key from "./Key"
import { useEffect } from "react"
import notes from "../constants/Notes"
import c from "../notes/C.mp3"
import db from "../notes/Db.mp3"
import d from "../notes/D.mp3"
import eb from "../notes/Eb.mp3"
import e from "../notes/E.mp3"
import f from "../notes/F.mp3"
import gb from "../notes/Gb.mp3"
import g from "../notes/G.mp3"
import ab from "../notes/Ab.mp3"
import a from "../notes/A.mp3"
import bb from "../notes/Bb.mp3"
import b from "../notes/B.mp3"
import c2 from "../notes/C2.mp3"
import db2 from "../notes/Db2.mp3"
import d2 from "../notes/D2.mp3"
import eb2 from "../notes/Eb2.mp3"
import e2 from "../notes/E2.mp3"
import f2 from "../notes/F2.mp3"

let C = new Audio(c)
let Db = new Audio(db)
let D = new Audio(d)
let Eb = new Audio(eb)
let E = new Audio(e)
let F = new Audio(f)
let Gb = new Audio(gb)
let G = new Audio(g)
let Ab = new Audio(ab)
let A = new Audio(a)
let Bb = new Audio(bb)
let B = new Audio(b)
let C2 = new Audio(c2)
let Db2 = new Audio(db2)
let D2 = new Audio(d2)
let Eb2 = new Audio(eb2)
let E2 = new Audio(e2)
let F2 = new Audio(f2)
  
let keysToSounds = {
    a: C, 
    w: Db,
    s: D,
    e: Eb,
    d: E,
    f: F,
    t: Gb, 
    g: G,
    y: Ab,
    h: A,
    u: Bb,
    j: B,
    k: C2,
    o: Db2,
    l: D2,
    p: Eb2,
    ";": E2,
    "'": F2
}

export default function Keyboard ({ keysPressed, setKeysPressed, setRecording, }) {

    const handleKeyDown = e => {
        if(e.repeat) {
            return
        }
        if(keysToSounds[e.key]) {
            setKeysPressed(prevKeysPressed => [...prevKeysPressed, e.key])
            let start = performance.now()
            //playing the corresponding sound to the key pressed
            keysToSounds[e.key].play();
            //updating keysPressed state
            setRecording(prevRecording => [...prevRecording, {key: `${e.key}`, start, duration: 0 }] );
        }
    }

    const handleKeyUp = e => {
        if (keysToSounds[e.key]) {
            //handling the removal of keys no longer being pressed
            let keysPressedCopy = [...keysPressed];
            keysPressedCopy.splice(keysPressed.indexOf(`${e.key}`), 1);
            setKeysPressed(keysPressedCopy);
            setRecording(prevRecording => {
                //initialising time for the keyUp 
              let keyUpTime = performance.now();
              const recordingCopy = [...prevRecording];
                //looking for the keyDown Event that corresponds to our keyUp
              const target = recordingCopy.findIndex(
                keyDown => keyDown.key === e.key && keyDown.duration === 0
              );
                //if the target note is in the keydown array
              if (target !== -1) {
                //setting the duration as the time released - the time the target was pressed down
                recordingCopy[target].duration = keyUpTime - recordingCopy[target].start;
                //settting the stop time
                recordingCopy[target].stop = keyUpTime;
              }
              return recordingCopy;
            });
            setTimeout(() => {
              keysToSounds[e.key].pause();
              keysToSounds[e.key].currentTime = 0;
            }, 25);
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown)
        window.addEventListener('keyup', handleKeyUp)
    }, [])

    return (
        <div className="keyboard">
            {notes.map((note, index) => { return <Key key={index} note={note} index={index} keysPressed={keysPressed}/> })}
        </div>
    )
}
