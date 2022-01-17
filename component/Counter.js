//================ MORE DETAILS ON STATE =================

import React, { Component } from 'react'
import { Button } from 'react-native-web';

class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }

    increment1() {
        //To change the state we must call the setState method
        this.setState({
            count: this.state.count + 1
        })
        //this.state.count = this.state.count + 1; Never change the state directly like this, 
        //instead use setState method
        console.log(this.state.count)
    }

    //as setState method is asynchronous To execute something after the setState is called we can use a 
    //callBack function. Never put a method after setState.
    increment2() {
        //To change the state we must call the setState method
        this.setState({
            count: this.state.count + 1
        }, () => {console.log('Callback value', this.state.count)}) //use a arrow function instead
    }

    //As react bundles multiple setState & compile into a single. Therefore we need to pass an function 
    //stating previous state
    increment(){
        this.setState(prevState => ({// we can also pass the props to the set method along with prevState
            count: prevState.count + 1
        }))
    }

    increment5(){
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }
    
    render() {
        return (
            <div>
                <h2>Count - {this.state.count}</h2>
                <Button title='Click me' onPress={() => this.increment5()}></Button>
            </div>
        )
    }
}

export default Counter;

/**  ------------------------------ KEY TAKE AWAY --------------------------
 * Always use setState to update, Don't update the state directly
 * If something has to be executed after setState, always use a callBack function (it is the 2nd args of setState)
 * If we have to update state based on previous state than we have to pass it as function rather than an object
 */
