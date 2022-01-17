import React, { Component } from 'react'
import { Button } from 'react-native-web'

export class ClassCounter5 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }

    componentDidMount(){
        document.title = `Clicked ${this.state.count} times`
    }

    componentDidUpdate(prevProps, prevState){
        document.title = `Clicked ${this.state.count} times`
    } 
    
    render() {
        return (
            <div>
                <Button title={this.state.count} onPress={() => this.setState({count: this.state.count + 1})}/>
            </div>
        )
    }
}

export default ClassCounter5
