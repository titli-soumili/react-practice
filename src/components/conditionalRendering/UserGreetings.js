/*
Things to remember:
    
    1. If-else statement dont work inside JSX as JSX is just a syntactic sugar for function calls and
        object construction.

    2. Adding If-else statement inside JSX is not valid. So here we have the If-else statement outside
        of JSX and the entire return statement containing the JSX is placed inside 'if' or 'else' block.

    3. We have 4 different approaches of Conditional Rendering:
        i. if/else
       ii. Element variables
      iii. Ternary conditional operator: The benefit is, it can be used inside the JSX and is mostly
                                            used method.
       iv. Short circuit operator: This method is just a specific case of Ternary Operator Approach.
                                    When we want to render either something or nothing, this method can
                                    be used.
*/

import React, { Component } from 'react';

class UserGreetings extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            isLoggedIn: false
        }
    }


    render() {

        //== Approach 1: if/else Approach ==//
        // if(this.state.isLoggedIn) {
        //     return <div>Welcome Soumili</div>
        // } else{
        //     return <div>Welcome Guest</div>
        // }


        //== Approach 2: Element variables Approach ==//
        // let greetMsg;       // Here, 'greetMsg' is the variable that stores element to be rendered and
        //                     // hence it is called Element variables Approach. 
        
        // if(this.state.isLoggedIn) {
        //     greetMsg = "Welcome Soumili"
        // } else{
        //     greetMsg = "Welcome Guest"
        // }
        // return <div>{greetMsg}</div>



        //== Approach 3: Ternary conditional operator Approach ==//
        // return this.state.isLoggedIn ? 
        //     (<div>Welcome Soumili</div>) : 
        //     (<div>Welcome Guest</div>)
        

        //== Approach 4: Short circuit operator Approach ==//
        
        // The logic is, when the value of this.state.isLoggedIn is set to true, it will render the
        // JSX <div>Welcome Soumili</div>, otherwise it will render nothing.
        return this.state.isLoggedIn && <div>Welcome Soumili</div>   
    }
}

export default UserGreetings;
