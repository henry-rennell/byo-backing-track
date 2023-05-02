import "./Keyboard.css"
import Key from "./Key"
import { useEffect, useState } from "react"
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

export default function Keyboard ({ keysPressed, setKeysPressed, setRecording, setReleaseTime,}) {

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
        let keyUpTime = performance.now();
            if(keysToSounds[e.key]) {
                //getting the exact time of key up
                //creating a copy of keys pressed state in order to modify it
                let newKeysPressed = [...keysPressed];
                //removing key after it is released
                newKeysPressed.splice(keysPressed.indexOf(`${e.key}`), 1)
                //setting new KeysPressed State
                setKeysPressed(newKeysPressed)
                //adding newly released key to state with its time of release.
                setReleaseTime(prevReleaseTimes => [...prevReleaseTimes, {key: e.key, stop: keyUpTime, }])
                //timer to pause the sound -> (25ms delay for a bit smoother sound)
                setTimeout(() => {
                    keysToSounds[e.key].pause();
                    keysToSounds[e.key].currentTime = 0;
                }, 25)
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
