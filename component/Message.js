//============= STATE EXAMPLE =======================

//Incase of class component apart from React we also need to import 'component' from react
import React, {Component} from "react";
import { Button } from "react-native-web";

//class must extend component and should implement render method which return either null or some HTML text
class Message extends Component{

    constructor (){
        super()
        this.state = {
            message : 'Welcome visitor'
        }
    }

    changeMessage(){
        this.setState({
            message: 'Thank you for subscribing'
        })
    }

    render() {
        return (
            <div>
                <h1>
                    {this.state.message}
                    <Button title='Subscribe' onPress={()=> this.changeMessage()}></Button>
                </h1>
            </div>
            
        )
    }
}

export default Message