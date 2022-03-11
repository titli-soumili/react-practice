import React, { Component } from 'react'

class LifeCycleB extends Component {
    // Method 1: constructor(props)
    constructor(props) {
        super(props)
        
        this.state = {
            name : 'Soumili'
        }

        console.log('Order of execution during Mounting phase in 1st child component:');
        console.log('1. Life Cycle B - Constuctor');
    }

    // Method 2: getDerivedStateFromProps(props, state)
    static getDerivedStateFromProps(props, state){
        console.log('2. Life Cycle B - getDerivedStateFromProps');
        return null;
    }

    // Method 4: componentDidMount()
    componentDidMount(){
        console.log('4. Life Cycle B - componentDidMount');
    }

    // Method 3: render()
    render() {
        console.log('3. Life Cycle B - render');
        return (
            <div>LifeCycleB</div>
        )
    }
}

export default LifeCycleB