/*
Rules to be followed while using setState() method: 
Rule 1: Do not modify the state directly as it will not re-render the modified UI. So, to change the state, 
        setState() method has to be used always as this method will let React know that it has to re-render
        the component.
Rule 2: Whenever you need to execute some codes after the state has been changed, do not place that code 
        right after the setState() method, instead, place that code within the callback function that is
        passed as the second parameter to the setState() method.
Rule 3: When you have to update the state based on the previous state value, pass in a function as 
        an argument instead of the regular object. The function has access to the previous state which can 
        be used to calculate the new state.
*/

import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
    
    /*
    In the below scenario, we are trying to increase the counter value by 5 on clicking of the "counter" button.
    So if you run it in the browser using "Wrong method" below, you will see in the console that, both the Callback 
    value and the Direct value (i.e. basically the previous value) of the state has been logged 5 times and the
    Callback value of the state changes to 1 instead of 5.

    The reason behind such behaviour is, React may group multiple setState calls into a single update for
    better performance. So here in the below scenario, all the 5 setState calls are done in one single go
    and the updated value does not carry over between the different calls.

    So, whenever you have to update the state based on the previous state you need to pass a function as an
    argument to setState() method instead of passing in an object (used in "Correct method" below).
    */
    increaseCounter() {
        //Wrong method
        this.setState({
            count: this.state.count + 1
        }, () => {
            console.log("Callback value = " + this.state.count);
        })
        console.log("Direct value = " + this.state.count);

        
        //Correct method
        
        // this.setState((prevState) => ({
        //     count: prevState.count + 1
        // }), () => {
        //     console.log(this.state.count);
        // })
    }

    increaseCounter5() {
        /* All these methods are calling in one single go which in turn making a call of all 5 setState() calls,
         defined in the increaseCounter() method, in one single go.*/

        this.increaseCounter()
        this.increaseCounter()
        this.increaseCounter()
        this.increaseCounter()
        this.increaseCounter()
    }

    render() {
        return (
            <div>
               <h2> Count - { this.state.count } </h2>
               <button type="button" onClick={() => this.increaseCounter5()}>Counter</button>
            </div>
        )
    }
}

export default Counter
