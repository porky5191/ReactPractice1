//=============== JSX DEMO ====================

//It is necessary to import React to use JSX
import React from 'react';

//Using JSX (JavaScript XML) to show HTML content. It is just a xml type syntax for easy understanding
/*
-- JSX is just a syntactic sugar of calling React.createElement internally.
-- Easy to maintain when there are huge codes instead of normal React Writing style.
*/
/*
JSX differences
-- Class -> className
-- for -> htmlFor
-- camelCase property
*/
const Hello = () => {
    return (
        <div className='dummyClass'>
            <h1>Hello Porky</h1>
        </div>
    );
}

//Original React writing style
export const Hello2 = () => {
    //return React.createElement('div', null, React.createElement('h1', null, 'Hello Porky Inside normal method'))
    return React.createElement('div', {id: 'hello', className: 'dummyClass'}, React.createElement('h1', null, 'Hello Porky Inside normal method'))
}

export default Hello