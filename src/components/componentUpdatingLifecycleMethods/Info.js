/*

Component Updating Lifecycle Methods:
    This method will call, when a component is being re-rendered as a result of changes to either its
    props or state. During this phase we have 5 methods. As per the order of execution, they are - 
    static getDerivedStateFromProps, shouldComponentUpdate, render, getSnapshotBeforeUpdate and 
    componentDidUpdate. Out of this 5 methods first 3 are rarely used during updating phase.

    1. static getDerivedStateFromProps(props, state):
        a. This method is called when the state of the component depeneds on changes in props over time.
        b. This method is called everytime a component is re-rendered.
        c. This is a static method. So, it doesn't have access to "this" keyword. So we cannot call 
            "this.setState" within this particular method. Instead it has to return either null or an
            object that represents the updated state of the component.
        d. Do not cause side effects. i.e. do not make any ajax call or any HTTP requests from or
            within this method.
        e. This method is one of the more rarely used methods during updating phase.

    2. shouldComponentUpdate(nextProps, nextState):
        a. This method receives the updated props and state as his parameter.
        b. As the name suggests, it dictates if a component should be re-rendered or not. By default all
            class components will re-render whenever the props they receive or state changes. This
            method basically compares the existing props and state values with the next props and state
            values and return true or false, to let React know whether the component should update or not.
            So this method is basically for performance optimization.
        c. Do not cause side effects. i.e. do not make any ajax call or any HTTP requests from or
            within this method and don't call setState() method.
        d. This method is one of the more rarely used methods during updating phase.

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

    4. getSnapshotBeforeUpdate(prevProps, prevState):
            a. This method accepts prevProps and prevState as its parameter and is called right before
                the changes from the virtual DOM are to be reflected in the DOM.
            b. This method is one of the more rarely used methods during updating phase.
            c. This method is used to capture some information from the DOM.
            d. This method is used to read the current DOM state and will either return a value or null.
                Returned value will be passed as the third parameter to the next method.

    5. componentDidUpdate(prevProps, prevState, snapshot):
            a. This method is called after the render is finished in the re-render cycle.
            b. This method is to be called only once in each re-render cycle. So this method can cause
                side effects i.e. we can make ajax calls here. But before making ajax calls it is
                always recomended to compare the prevProps with the new Props and then decide whether to
                make ajax call or not otherwise it will make unwanted requests which is not correct.
*/