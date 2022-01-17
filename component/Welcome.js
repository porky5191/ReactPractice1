//=========== CLASS COMPONENT & PROPS ==================

//Incase of class component apart from React we also need to import 'component' from react
import React, {Component} from "react";

//class must extend component and should implement render method which return either null or some HTML text
class Welcome extends Component{
    render() {
        //to destructure
        //const {name, heroName} = this.props
        //const {state1, state2} = this.state
        return <h1>Inside the class Component</h1>
    }
}

//to receive the props passed we can use 'this.props.<property_name>
export class Welcome1 extends Component{
    render(){
        return (
            <div>
                <h1>Welcome {this.props.name} a.k.a {this.props.heroName}</h1>
                {this.props.children}
            </div>
        )
        
        
    }
}

export default Welcome