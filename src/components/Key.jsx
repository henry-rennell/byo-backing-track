import { useEffect } from "react"
import "./Key.css"




export default function Key ({ note, index }) {
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
        <div className={"key" + (note.isFlat? " black" : " white")}>{note.note} {keyToNote[index]}</div>
    )
}
