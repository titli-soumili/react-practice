/*
Things to remember:
    1. Controlled Components: In regular html, form elements like - input, textarea and so on are
            responsible on their own to handle the user input and update the respective values but
            here we want React, to controll the form elements instead. Such Form elements, whose values
            are controlled by React are called Controlled Components.

    2. When you assign a handler to the onChange event, the event itself is passed as a parameter to the
        handler. So here in "changeUserName" property, we have one parameter called "event". From this
        "event", we can extract the value of input element using "event.target.value".

    3. We are showing the example of Controlled Components for 3 different form elements - input,
        textarea and select tag.

    4. In button tag, type="submit" will give the user the ability to submit the form by hitting the
        "enter" key which is always good.
*/


import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        userName : '', comment : '', topic : 'react'
      }
    }
    
    changeUserName = event => {
        this.setState({
            userName: event.target.value
        })
    }

    changeComment = event => {
        this.setState({
            comment: event.target.value
        })
    }

    changeTopic = event => {
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit = event => {
        alert(`${this.state.userName} ${this.state.comment} ${this.state.topic}`)
        event.preventDefault()
    }

    render() {
        const {userName, comment, topic} = this.state
        return (
        <form onSubmit={this.handleSubmit}>
            <div>
                <label>User Name: </label>
                <input type="text" value={userName} onChange={this.changeUserName}/> 
            </div>
            
            <br/>
            <div>
                <label>Comments: </label>
                <textarea value={comment} onChange={this.changeComment}></textarea> 
            </div>

            <br/>
            <div>
                <label>Topic: </label>
                <select value={topic} onChange={this.changeTopic}>
                    <option value="react">React</option>
                    <option value="php">PHP</option>
                    <option value="javascript">Javascript</option>
                </select> 
            </div>
            <button>Submit</button>
        </form>    
        );
    }
}

export default Form;
