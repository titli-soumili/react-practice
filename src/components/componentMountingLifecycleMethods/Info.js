/*

Mounting Life Cycle Methods:
    This method will call, when an instance of a component is being created and inserted into the DOM.
    During this phase we have 4 methods. As per the order of execution, they are - constructor, static 
    getDerivedStateFromProps, render and componentDidMount.

    1. constructor(props):
        a. It is a special function that will get called whenever a new component is created.
        b. It is used to initalize a state or binding the event handlers to the class instance.
        c. Do not cause side effects. i.e. do not make any ajax call or any HTTP requests from or
            within the constructor.
        d. While defining constructor,
            i. You have to call a special function called super(props). This will call the base class
                constructor. In our component, we have access to "this.props" only after we have
                initially called super() passing in the props as an argument.

            ii. Constructor is the only place where we can change or set the "state" by directly 
                overwritting "this.state" fields. In all other scenarios, this.setState() methods are
                used.

    2. static getDerivedStateFromProps(props, state):
        a. This method is called when the state of the component depeneds on changes in props over time.
        b. This is a static method. So, it doesn't have access to "this" keyword. So we cannot call 
            "this.setState" within this particular method. Instead we have to return an object that 
            represents the new state of the component.
        c. Do not cause side effects. i.e. do not make any ajax call or any HTTP requests from or
            within this method.

    3. render():
        a. In this method, we read "this.prop" and "this.state" and return the JSX which describes the UI.
        b. It is a pure function. For the given props and state, it should always render the same UI.
        c. This method doesn't support: changing the state, interacting with DOM or making ajax calls.
        d. Since, it is the render method JSX, which also contains the other children components, right 
            after the parent render method, the Children components lifecycle methods are also executed.
        
    What is a Pure Function?
        Pure Function is a function (a block of code ) that always returns the same result if the same
        arguments are passed. It does not depend on any state, or data change during a program’s 
        execution rather it only depends on its input arguments. Let’s see the below JavaScript Function:

            function calculateGST( productPrice ) {
                return productPrice * 0.05;
            }
        
        The above function will always return the same result, if we pass the same productPrice. In 
        other words, it’s output doesn’t get affected by any other values / state changes. So we can
        call “calculateGST” function as a Pure function. Now, let’s see one more function below:

            var tax = 20;
            function calculateGST( productPrice ) {
                return productPrice * (tax / 100) + productPrice;
            }
        
        In this case, the output is dependent on an external variable “tax”. So if tax value is updated
        somehow, then we will get a different output though we pass the same productPrice as a parameter
        to this function. So it is not a pure function. Below are some side effects which a function
        should not produce in order to be considered as a pure function –

            a. Making a HTTP request
            b. Mutating data
            c. Printing to a screen or console
            d. DOM Query/Manipulation
            e. Math.random()
            f. Getting the current time

    4. componentDidMount():
        a. This method will be called only once in the whole life cycle of a given component and it is
            invoked immediately after a component and all its children components have been rendered to
            the DOM.
        b. This method is the perfect place to cause side effects. We can interact with DOM or perform
            any ajax calls to load data.

*/