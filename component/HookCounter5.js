//============================== EFFECT HOOK ===============================

import React, {useState, useEffect} from 'react'
import { Button } from 'react-native-web'

function HookCounter5() {
    //calling useState
    const [count, setCount] = useState(0)
    
    //calling useEffect, it is used to use the functionality of DidMount, DidUpdate etc options.
    useEffect(() => {
        document.title = `You clicked ${count} times` //changing the name of the title
    })

    return (
        <div>
            <Button title= {count} onPress={() => setCount(count + 1)}/>
        </div>
    )
}

export default HookCounter5

/** ------------- How useEffect works -------------------
 * requesting React to execute the function everytime the component (ie count in our case) renders
 * 1.. useEffect runs after every render
 * 2.. useEffect is placed inside the component , by doing this we can easily access state & props
 */