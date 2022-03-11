import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB';
import LifeCycleC from './LifeCycleC';

class LifeCycleA extends Component {
    // Method 1: constructor(props)
    constructor(props) {
        super(props)
        
        this.state = {
            name : 'Soumili'
        }

        console.log('Order of execution during Mounting phase:');
        console.log('1. Life Cycle A - Constuctor');
    }

    // Method 2: getDerivedStateFromProps(props, state)
    static getDerivedStateFromProps(props, state){
        console.log('2. Life Cycle A - getDerivedStateFromProps');
        return null;
    }

    // Method 4: componentDidMount()
    componentDidMount(){
        console.log('4. Life Cycle A - componentDidMount');
    }

    // Method 3: render()
    render() {
        console.log('3. Life Cycle A - render');
        return (
            <div>
                <div>lifeCycleA</div>
                <LifeCycleB />
                <LifeCycleC />
            </div>
        )
    }
}

export default LifeCycleA