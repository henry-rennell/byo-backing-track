import { useEffect } from "react"
import "./Key.css"




export default function Key ({ note, index, keysPressed }) {
    let keyToNote = {
        0: 'z',
        1: 's',
        2: 'x',
        3: 'd',
        4: 'c',
        5: 'v',
        6: 'g',
        7: 'b',
        8: 'h',
        9: 'n',
        10: 'j',
        11: 'm'
    }

    return(
        <div className={"key" + (note.isFlat? " black" : " white") + (keysPressed.includes(keyToNote[index])? " pressed" : "")}>
            <span>{note.note}</span><span className="control">{keyToNote[index]}</span>
        </div>
    )
}
