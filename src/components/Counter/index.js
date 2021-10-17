import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props){
        super(props)
        this.state = {
            value: 0
        }
    }
    incAdd = () => {
        const {value} = this.state;
        this.setState({value: value+1});
        console.log('1')
    }
    incDel = () => {
        const {value} = this.state;
        this.setState({value: value-1});
        console.log('2')
    }
    render() {
        const {value} = this.state;
        return (
            <div>
                <button onClick={this.incAdd}>+</button>
                <button onClick={this.incDel}>-</button>
                <div>{value}</div>
            </div>
        )
    }
}

export default Counter
