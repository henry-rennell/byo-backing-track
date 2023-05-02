   export default function CompileRecording(state1, state2) {
    
        //this function is combining two arrays of objects
        //because there is two states that pertain to the recording of keystrokes(recording and releaseTime), both contain objects for each keystroke, this reduce combines the first object within the second array that has the same 'key' value
        let combined = state1.reduce((newArr, state1Item) => {
            //initialises the variable that represents corresponding object in state2 using find() as the first object where the "key" is the same
            let state2Item = state2.find(state2Item => state2Item.key === state1Item.key)
            //if that corresponding item in the second state exists
            if(state2Item) {
                //pushing to the accumulator, a combination of those two items, also working out the duration of the keystroke
                newArr.push({...state1Item, ...state2Item, duration: (state2Item.stop - state1Item.start)});
                //removing that object from state2, to avoid the same note being played twice being combined with the first instance of that note
                state2.splice(state2.indexOf(state2Item), 1)
            }
            return newArr
        }, [])
        //returning the two states combined into one array
        return combined
    }
