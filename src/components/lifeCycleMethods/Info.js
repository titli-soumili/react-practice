/*
Things to remember:

LifeCycle Methods:

    1. When we create a react Component, that Component goes through several stages in it's life cycle.
        React provides us with built in methods that we can override at perticular stages in the life
        cycle. 
        
    2. These LifeCycle Methods do not exist on a functional component.

    3. We can classify LifeCycle Methods into 4 phases - 
            Mounting, Updating, Unmounting and Error Handling

    4. Mounting: This method will call, when an instance of a component is being created and inserted
                    into the DOM. During this phase we have 4 methods - constructor, static 
                    getDerivedStateFromProps, render and componentDidMount

    5. Updating: This method will call, when a component is being re-rendered as a result of changes
                    to either its props or state. During this phase we have 5 methods - static 
                    getDerivedStateFromProps, shouldComponentUpdate, render, getSnapshotBeforeUpdate
                    and componentDidUpdate
    
    6. Unmounting: This method will call, when a component is being removed from the DOM. During this
                    phase we have only 1 method - componentWillUnmount
        
        componentWillUnmount: 
            1. This method is invoked immediately before a component is unmounted and
                destroyed.
            2. In this method, some cleanup task can be performed like - cancelling any network
                requests, removing event handlers, cancelling any subscriptions and also
                invalidating timers from setTimeOut() or setTimeInterval().
            3. Should not make setState() call in this method as the component is never re-render
                after it  has been unmounted.

    7. Error Handling: This method will call, when there is an error during rendering, in a lifecycle
                        method or in the constructor or any child component. During this phase we have
                        2 methods - static getDerivedStateFromError and componentDidCatch



*/