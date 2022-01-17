//====================== STATE HOOK USING ARRAY ==========================

import React, { useState } from 'react'
import { Button } from 'react-native-web'

function HookCounter4() {
    const [items, setItems] = useState([])
    const addItem = () => {
        setItems([...items, {
            id: items.length,
            value: Math.floor(Math.random() * 10) + 1
        }])
    }

    return (
        <div>
            <Button title="Add a number" onPress={addItem}/>
            <ul>
                {
                    items.map(item => <li key={item.id}></li>)
                }
            </ul>
        </div>
    )
}

export default HookCounter4

/** --------------- Key takeaway -----------------
 * The useState hook lets you add state to functional components
 * In  classes, the state is always an object
 * With the useState hook, the state doesn't have to be an object
 * The useState hook returns an array with 2 element 
 * 1. The first element is the current value of the state
 * 2. and the second is a state setter function
 * New state value depends on the previous state value? You can pass a function to the setter function.
 */