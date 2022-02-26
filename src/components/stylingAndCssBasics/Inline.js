/*
Things to remember:
We can use css in React in 4 different ways:
    1. CSS stylesheets

    2. Inline styling - In React, inline styles are not specified as a string. Instead they are 
        specified within an object, whose key is the camle cased version of the style name and the
        value is usually a string. E.g. -

            if the actual style name is written as -
                font-size: 72px; text-align: 'center';

            in react inline css, it will be an object - 
                const heading = {fontSize: '72px', textAlign: 'center'}

        as explained below. So, using inline css in react is pretty straight forward - create an object
        and use it to style attribute.
    
    3. CSS modules
    4. CSS in JS libraries (Styled components)
*/

import React from 'react';

//== Approach 2: Inline Styling ==//
function Inline() {
    const heading = {fontSize: '72px', color: 'blue', textAlign: 'center'}
    return <div style={heading}> Inline </div>;
}

export default Inline;
