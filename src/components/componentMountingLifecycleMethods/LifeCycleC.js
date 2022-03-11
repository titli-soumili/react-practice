import React, { Component } from 'react'

class LifeCycleC extends Component {
    // Method 1: constructor(props)
    constructor(props) {
        super(props)
        
        this.state = {
            name : 'Soumili'
        }

        console.log('Order of execution during Mounting phase in 2nd child component:');
        console.log('1. Life Cycle C - Constuctor');
    }

    // Method 2: getDerivedStateFromProps(props, state)
    static getDerivedStateFromProps(props, state){
        console.log('2. Life Cycle C - getDerivedStateFromProps');
        return null;
    }

    // Method 4: componentDidMount()
    componentDidMount(){
        console.log('4. Life Cycle C - componentDidMount');
    }

    // Method 3: render()
    render() {
        console.log('3. Life Cycle C - render');
        return (
            <div>LifeCycleC</div>
        )
    }
}

export default LifeCycleC