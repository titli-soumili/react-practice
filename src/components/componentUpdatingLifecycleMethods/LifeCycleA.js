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
        console.log('Life Cycle A - Constuctor');
    }

    // Method 2: getDerivedStateFromProps(props, state) -- Mounting
    // Method 1: getDerivedStateFromProps(props, state) -- Updating
    static getDerivedStateFromProps(props, state){
        console.log('Life Cycle A - getDerivedStateFromProps');
        return null;
    }

    // Method 4: componentDidMount() -- Mounting
    componentDidMount(){
        console.log('Life Cycle A - componentDidMount');
    }

    // Method 2: shouldComponentUpdate(nextProps, nextState) -- Updating
    shouldComponentUpdate(){
        console.log('Life Cycle A - shouldComponentUpdate');
        return true;
    }

    // Method 4: getSnapshotBeforeUpdate(prevProps, prevState) -- Updating
    getSnapshotBeforeUpdate(){
        console.log('Life Cycle A - getSnapshotBeforeUpdate');
        return null;
    }

    // Method 5: componentDidUpdate(prevProps, prevState, snapshot) -- Updating
    componentDidUpdate(){
        console.log('Life Cycle A - componentDidUpdate');
    }

    changeState = () => {
        this.setState({
            name : 'Welcome to LifeCycle B'
        })
    }

    // Method 3: render() -- Mounting and Updating
    render() {
        console.log('Life Cycle A - render');
        return (
            <div>
                <div>lifeCycleA</div>
                <button onClick={this.changeState}>Change State</button>
                <LifeCycleB />
                <LifeCycleC />
            </div>
        )
    }
}

export default LifeCycleA