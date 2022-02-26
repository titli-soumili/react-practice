/*
Things to remember:
We can use css in React in 4 different ways:
    1. CSS stylesheets
    2. Inline styling
    
    3. CSS modules - 
        a. This feature is available with React scripts version 2 or higher. So while using it make 
            sure you have installed higher version of React or update your "create-react-app" package
            if it is below the major version 2.

        b. There is a file naming convention to be used for CSS modules with "create-react-app" - 
            The file name must be suffixed with ".module.css" and we will be placing this file inside
            "src" folder and not inside "components" folder.

        c. One advantag of using regular css in CSS modules is, classes are localy scoped by default. So
            once we import the regular css file in the App.js, we can use those classes in any component
            we want. CSS modules on the other hand because it is referrenced the classname using "styles"
            variable, cannot be used inside any child component, which might leads to css conflicts.

    4. CSS in JS libraries (Styled components)
*/


import React from 'react';

//== Approach 3: CSS modules ==//
function CssModules() {
  return (
    <div>
        <h1 className='error'>Error</h1>
    </div>
  );
}

export default CssModules;