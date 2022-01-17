//========================= FUNCTIONAL COMPONENT =========================

//we need to import react
import React from "react";

//using normal function and passing multiple props
function Greet(props){
    console.log(props)
    return <h1>Hello {props.name} a.k.a {props.heroName}</h1>
}

//using arrow function and passing only single props
export const Greet2 = props => {
    //to destructure
    /*
    const {name, heroName} = props
    */
    console.log(props)
    return <h1>Inside the arrow function {props.name}</h1>
}

//we can also use simple destructure
// const Greet5 = ({name, heroName}) => {...}

// return() if we want to write multiple lines inside return statement
//currently we can return only one HTML, but to return multiple lines we need a wrapper class <div></div>
export const Greet3 = props => {
    return (
        <div>
            <h1>
                Hellow {props.name}
            </h1>
            {/* If something is there then browser randers it else simply discard it */}
            {props.children}
        </div>
    )
}

export default Greet