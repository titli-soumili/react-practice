Variables: 
        In next gen javascript instead of "var", we will use either "let" or "const". 
        let: It is used for variable values. Variable initialised with "let" can be re-assigned.
        const: It is used for constant values. Variable initialised with "const" cannot be re-assigned.


ES6 Arrow Function:
        Arrow functions are a different way of creating functions in JavaScript. Besides a shorter syntax, they offer advantages when it comes to keeping the scope of the "this" keyword. For more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions


super():
        The "super" keyword is used to access properties on an object literal or class's [[Prototype]], or invoke a superclass's constructor.


Spread Operator: 
        In next gen javascript, this operator is used to split up all array elements or object properties. It looks like ( ... ).

        var employee = {
                        eid: "E102",
                        ename: "Jack",
                        eaddress: "New York",
                        salary: 50000
                }

        <!-- do normal copy -->
        /* Name of the employee as well as newEmployee is changed. As it will store the value of the employee in memory and copy that pointer of the memory. */

        console.log("Employee=> ", employee);
        var newEmployee = employee;    // Shallow copy
        console.log("New Employee=> ", newEmployee);

        console.log("---------After modification----------");
        newEmployee.ename = "Beck";
        console.log("Employee=> ", employee);
        console.log("New Employee=> ", newEmployee);


        <!-- using spread operator: -->
        /* Only Name of the newEmployee will change but employee will remain unchage. */

        console.log("Employee=> ", employee);
        var newEmployee = {...employee};
        console.log("New Employee=> ", newEmployee);

        console.log("---------After modification----------");
        newEmployee.ename = "Beck";
        console.log("Employee=> ", employee);
        console.log("New Employee=> ", newEmployee);


Rest Operator: 
        In next gen javascript, this operator is used to merge a list of function arguments into an array. It looks like same as Spread Operator ( ... ).


Destructuring: 
        This operator extract single element or property and store them in variables.


Difference between Spread Operator and De-structuring:
        Spread Operator takes out all elements or properties and store them in new array or object.
        De-structuring extract particular elements or properties and store them in variables.


Primitive Type: 
        Numbers, Strings Booleans - These are so called Primitive Type. Whenever a variable is re-assigned or stored into another variable, it will copy the value.


Reference Type: 
        Objects and Arrays are Reference Type. Whenever an array or object is re-assigned or stored into another array or object, it will actually store the actual value into memory along with its key as a pointer and then copy that pointer to the new array or object. To copy then in immutable way we need to use spread operator to copy its value.


To learn more about javascript array: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array



Benefits of React:
        1. Learning React js is very much developer friendly. You don't have to understand all concepts of React. You don't have to learn a lot about different concepts or file structures. All it basically needs is the programming concept. You can directly install React and use it.
        2. React is full of different existing libraries (i.e. Axios for http) inside the application. We need to install those libraries as and when needed which makes React a light weight application.
        3. React is a component based approach where a website is divided into multiple small and re-usable components.


Benefits of using component based module:
        1. Reusability: Having reusable building blocks helps us avoid repetition.
        2. Separation of Concerns: Having a Separation of Concerns helps us with keeping our code base small and manageable.Instead of having a large file containing all the codes and logics of the entire user interface, we can split them into several components to perform specific task.

        
Difference between npm and npx:
        npm:
        1. The 'npm' stands for Node Package Manager and it is the default package manager for Node.js.
        2. If you wish to run package through npm, you have to specify that package in your package.json and install it locally. i.e.: To use `create-react-app` in npm, the commands are `npm install create-react-app` then `create-react-app myApp` (Installation required).
        3. Npm is a tool that use to install packages.
        4. Packages used by npm are installed globally. You have to care about pollution in the long term.
        
        
        npx:
        1. The npx stands for Node Package Execute and it comes with the npm.
        2. A package can be executable without installing the package. It is an npm package runner. So if any packages aren't already installed, it will install them automatically. i.e.: In npx you can create a react app without installing the package: `npx create-react-app myApp` . This command is required in every app's life cycle only once.
        3. Npx is a tool that use to execute packages.
        4. Packages used by npx are not installed globally. You don't have to worry about for pollution in the long term.


Difference between shallow copy and deep copy:

Event Bubbling:


To learn more about Arrow_functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions