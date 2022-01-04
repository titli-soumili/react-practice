/*
Destructuring Props: 
Destructuring is an ES6 feature, that makes it possible to unpack, values from arrays or properties from
objects into distinct variables. In react, Destructuring Props and States improves code readability.

There are 2 ways to destructure props in functional component: 
    1) destructure it in the function parameter, 
    2) destructure it within function body
*/


import React from 'react'

/* Method 1: destructure props in the function parameter */
    // const Greet = ({name, heroName}) => {
    //     return (
    //         <div>
    //             <h1>Welcome {name} a.k.a {heroName} </h1>
    //         </div>
    //     )
    // }

/* Method 2: destructure props within function body */
    const Greet = props => {
        const {name, heroName} = props
        return (
            <div>
                <h1>Welcome {name} a.k.a {heroName} </h1>
            </div>
        )
    }

export default Greet;
