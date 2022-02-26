/*
Things to remember:
We can use css in React in 4 different ways:
    1. CSS stylesheets
    2. Inline styling
    3. CSS modules
    4. CSS in JS libraries (Styled components)
*/

import React from 'react';
import './myStyles.css';

//== Approach 1: CSS stylesheets ==//
    // function Stylesheet() {
        // return <div className='primary'>Stylesheet</div>;
    // }

    //== We can use conditional and multiple classes as well using template  literals ==//
    function Stylesheet(props) {
        let clsVal = props.primary ? 'primary' : ''
        return <h1 className={`${clsVal} font-xl`}>Stylesheet</h1>;
    }

export default Stylesheet;
