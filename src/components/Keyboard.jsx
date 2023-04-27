import "./Keyboard.css"
import Key from "./Key"
import { useEffect, useState } from "react"
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


const notes = [
    { note: "C", isFlat: false },
    { note: "Db", isFlat: true },
    { note: "D", isFlat: false },
    { note: "Eb", isFlat: true },
    { note: "E", isFlat: false },
    { note: "F", isFlat: false },
    { note: "Gb", isFlat: true },
    { note: "G", isFlat: false },
    { note: "Ab", isFlat: true },
    { note: "A", isFlat: false },
    { note: "Bb", isFlat: true },
    { note: "B", isFlat: false },
  ]
  
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


  
  let Sounds = {
      z: C, 
      s: Db,
      x: D,
      d: Eb,
      c: E,
      v: F,
      g: Gb, 
      b: G,
      h: Ab,
      n: A,
      j: Bb,
      m: B
  }

export default function Keyboard () {
    const [recording, setRecording] = useState([])

    const handleKeyDown = e => {
        if(e.repeat) {
            return;
        }
        if(Sounds[e.key]) {
            Sounds[e.key].play();
        }
    }

    const handleKeyUp = e => {
        if(Sounds[e.key]) {
            Sounds[e.key].pause();
            Sounds[e.key].currentTime = 0;
        }
    }

    
    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown)
        window.addEventListener('keyup', handleKeyUp)
    }, [])


    return  (
        <div className="keyboard">
            {notes.map((note, index) => { return <Key key={index} note={note} index={index} /> })}
        </div>
    )
}
