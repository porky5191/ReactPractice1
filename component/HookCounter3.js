//============= STATE VARIABLE USING OBJECT =======================

import React, {useState} from 'react'
import { Button, TextInput } from 'react-native-web'

function HookCounter3() {
    const [name, setName] = useState({firstName: '', lastName: ''})
    return (
        <div>
            <h1>-- Your Name --</h1>
            <h1>{name.firstName} {name.lastName}</h1>
            <Button title='Change Name' onPress={() => setName({...name, firstName: 'Arun', lastName: 'Porky'})}/>
            
        </div>
    )
}

export default HookCounter3

// setState: merge the state whereas useState: doesn't merge the state. To merge we can use spread operator
// as shown above.