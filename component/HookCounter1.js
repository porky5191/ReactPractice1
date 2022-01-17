//======================= STATE HOOK =============================

import React, {useState} from 'react'
import { Button } from 'react-native-web'

export default function StateHook() {
    //using hoocks
    //count : store current state value
    //setCount : accept and argument and set count value to that argument

    const [count, setCount] = useState(0)//destructuring and getting 2 values, var name can be anything eg [me, she]
    return (
        <div>
            <h1>Count value is: {count}</h1>
            <Button title='Click Me' onPress={() => setCount(count + 1)}>  </Button>
        </div>
    )
}

/** --------  3 Steps for setState ------------
 * Set functional component [line 4]
 * Declare state variable and initialize to 0 [line 6]
 * Updating state variable [line 9]
 */

/** ------------- Rules for Hooks ---------------
 * Only call Hooks at the Top level
 * Don't call Hooks inside loops, conditions, or nested functions
 * Only call Hooks from reac functions
 */