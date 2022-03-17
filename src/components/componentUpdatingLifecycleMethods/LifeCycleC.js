import React, { Component } from 'react'

class lifeCycleC extends Component {
    // Method 1: constructor(props)
    constructor(props) {
        super(props)
        
        this.state = {
            name : 'Soumili'
        }

        console.log('Order of execution during Mounting phase:');
        console.log('Life Cycle C - Constuctor');
    }

    // Method 2: getDerivedStateFromProps(props, state) -- Mounting
    // Method 1: getDerivedStateFromProps(props, state) -- Updating
    static getDerivedStateFromProps(props, state){
        console.log('Life Cycle C - getDerivedStateFromProps');
        return null;
    }

    // Method 4: componentDidMount() -- Mounting
    componentDidMount(){
        console.log('Life Cycle C - componentDidMount');
    }

    // Method 2: shouldComponentUpdate(nextProps, nextState) -- Updating
    shouldComponentUpdate(){
        console.log('Life Cycle C - shouldComponentUpdate');
        return true;
    }

    // Method 4: getSnapshotBeforeUpdate(prevProps, prevState) -- Updating
    getSnapshotBeforeUpdate(){
        console.log('Life Cycle C - getSnapshotBeforeUpdate');
        return null;
    }

    // Method 5: componentDidUpdate(prevProps, prevState, snapshot) -- Updating
    componentDidUpdate(){
        console.log('Life Cycle C - componentDidUpdate');
    }

    // Method 3: render() -- Mounting and Updating
    render() {
        console.log('Life Cycle C - render');
        return (
            <div>
                <div>lifeCycleC</div>
            </div>
        )
    }
}

export default lifeCycleC