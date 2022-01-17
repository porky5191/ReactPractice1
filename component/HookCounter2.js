//====================== HOOK USING SAFER WAY =======================

import React, {useState} from 'react'
import { Button } from 'react-native-web'

function HookCounter2() {
    const initialCount = 0
    const [count, setCount] = useState(initialCount)
    return (
        <div>
            <h1>Count: {count}</h1>
            <Button title='Reset' onPress={()=> setCount(initialCount)}/>
            {/* Below 2 methods are not safe */}
            {/* <Button title='Increment' onPress={()=> setCount(count + 1)}/>  */}
            {/* <Button title='Decrement' onPress={()=> setCount(count - 1)}/> */}

            {/* To increment or decrement based on previous value use a method as param to setCount(()=>{...}) */}
            <Button title='Increment' onPress={()=> setCount(prev => prev + 1)}/> 
            <Button title='Decrement' onPress={()=> setCount(prev => prev - 1)}/>
        </div>
    )
}

export default HookCounter2
