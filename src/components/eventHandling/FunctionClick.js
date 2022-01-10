/*
Things to remember:

    1. React events are named as camel case rather than lower case. i.e. it should be always "onClick" and 
        NOT "onclick".
    2. With JSX you will pass the function as the event handler rather than a string. i.e. it should be always
        onClick={clickHandler} and NOT onClick="clickHandler()".
    3. In javascript, it is very much possible to define a function within another function.
    4. When a paranthesis has been added to a function, that is called a "Function Call". ex:- clickHandler(). 
        So always remember, in react we are passing the function as a event handler and NOT a function call.

*/

import React from 'react'

export default function FunctionClick() {

    function clickHandler() {
        console.log("function clicked");
    }

    return (
        <div>
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}
