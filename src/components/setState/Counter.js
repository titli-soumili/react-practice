import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
    
    increaseCounter() {
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

        // this.setState({
        //     count: this.state.count + 1
        // }, () => {
        //     console.log(this.state.count);
        // })

        
        /* React may group multiple setState calls into a single update for better performance.*/
        this.setState((prevState) => ({
            count: prevState.count + 1
        }), () => {
            console.log(this.state.count);
        })
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
