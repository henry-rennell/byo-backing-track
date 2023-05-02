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

let Sounds = {
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


export default async function PlayBack(compiledAudio) {
      let startTime = compiledAudio[0].start;
    compiledAudio.forEach((keystroke, idx) => {
      let sound = Sounds[keystroke.key];
      sound.preload = 'auto'
      //the playback is based on the initial note
      //difference is the gap between the start of the song and when this particular note starts
      let difference = keystroke.start - startTime
      //setting a timer to play the note after the note is due to start
      let startTimeout = setTimeout(() => {
            sound.play();
      }, difference);
      //pausing sound / setting time to 0
      let stopTimeout = setTimeout(() => {
            sound.currentTime = 0;
            sound.pause();
      }, difference + keystroke.duration + 25);
    });
  }
