/*
Things to remember:

    1. Why we bind event handlers in react app is purely because of the way "this" keyword works in Javascript and 
        not because of how react works.
    2. There are 4 ways to bind event in react:
        a) binding in render                 - Try to avoid usig this approach due to having performance implication.
        b) arrow function in render          - To some extent similar to the first approach and probably the easiest
                                                way to pass the parameters. If your code doesn't involve re-rendring
                                                nested children components, this approach is still an available option.
        c) binding in the class constructor  - Mostly used approach and as of now the best option to bind event handlers.
        d) class property as arrow functions - Still an experimental feature.
*/


import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            message: "Hello"
        }

        //== This is method 3: binding in the class constructor ==//
        // this.clickHandler = this.clickHandler.bind(this)
    }
    
    //== For event binding method 1 - 3, below function will be used ==//
    clickHandler() {
        this.setState({
            message: "Good Bye!"
        })
    }

    //== This is method 4: class property as arrow functions ==//
    // clickHandler = () => {
    //     this.setState({
    //         message: "Good Bye!"
    //     })
    // }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>

                {/* This is method 1: binding in render */}
                <button onClick={this.clickHandler.bind(this)}>Click</button>
                
                {/* This is method 2: arrow function in render */}
                {/* <button onClick={() => this.clickHandler()}>Click</button> */}

                {/* This is method 3: binding in the class constructor */}
                {/* <button onClick={this.clickHandler}>Click</button> */}
                
                {/* This is method 4: class property as arrow functions */}
                {/* <button onClick={this.clickHandler}>Click</button> */}
            </div>
        )
    }
}

export default EventBind
