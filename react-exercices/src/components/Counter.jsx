import React, {Component} from 'react'


export default class Counter extends Component {
    state = {
        number: 0
    }

    addOne = () => {
        this.setState({ number: this.state.number + 1 })
    }

    lessOne = () => {
        this.setState({ number: this.state.number - 1 })
    }

    changeNumber = (difference) => {
        this.setState({
            number: this.state.number + difference
        })
    }

    render() {
        return (
            <div>
                <div>Número: {this.state.number}</div>
                <button onClick={this.addOne}>+</button>
                <button onClick={this.lessOne}>-</button>
                <button onClick={() => this.changeNumber(10)}>+ 10</button>
                <button onClick={() => this.changeNumber(-10)}>- 10</button>
            </div>
        )
    }
}