import { useEffect } from "react"
import "./Key.css"




export default function Key ({ note, index, keysPressed }) {

let keys = [
    "a",
    "w",
    "s",
    "e",
    "d",
    "f",
    "t",
    "g",
    "y",
    "h",
    "u",
    "j",
    "k",
    "o",
    "l",
    "p",
    ";",
    "'"
]


    return(
        <div className={"key" + (note.isFlat? " black" : " white") + (keysPressed.includes(keys[index])? " pressed" : "")}>
            <span>{note.note}</span><span className="control">{keys[index]}</span>
        </div>
    )
}
