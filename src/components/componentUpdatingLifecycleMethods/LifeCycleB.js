import React, { Component } from 'react'

class lifeCycleB extends Component {
    // Method 1: constructor(props)
    constructor(props) {
        super(props)
        
        this.state = {
            name : 'Soumili'
        }

        console.log('Order of execution during Mounting phase:');
        console.log('Life Cycle B - Constuctor');
    }

    // Method 2: getDerivedStateFromProps(props, state) -- Mounting
    // Method 1: getDerivedStateFromProps(props, state) -- Updating
    static getDerivedStateFromProps(props, state){
        console.log('Life Cycle B - getDerivedStateFromProps');
        return null;
    }

    // Method 4: componentDidMount() -- Mounting
    componentDidMount(){
        console.log('Life Cycle B - componentDidMount');
    }

    // Method 2: shouldComponentUpdate(nextProps, nextState) -- Updating
    shouldComponentUpdate(){
        console.log('Life Cycle B - shouldComponentUpdate');
        return true;
    }

    // Method 4: getSnapshotBeforeUpdate(prevProps, prevState) -- Updating
    getSnapshotBeforeUpdate(){
        console.log('Life Cycle B - getSnapshotBeforeUpdate');
        return null;
    }

    // Method 5: componentDidUpdate(prevProps, prevState, snapshot) -- Updating
    componentDidUpdate(){
        console.log('Life Cycle B - componentDidUpdate');
    }

    // Method 3: render() -- Mounting and Updating
    render() {
        console.log('Life Cycle B - render');
        return (
            <div>
                <div>lifeCycleB</div>
            </div>
        )
    }
}

export default lifeCycleB