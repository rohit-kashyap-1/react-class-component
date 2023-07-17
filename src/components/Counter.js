import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            counter: 1 
        };
    }
    //
    increment =()=> {

        //increment
        console.log('increment')

        this.setState({ counter: this.state.counter + 1 });


    }
    decrement = () => {
        this.setState({ counter: this.state.counter - 1 });
    }
    render() {
        return (
            <div className='container'>
                <h1>{this.state.counter}</h1>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
            </div>

        )
    }
}
