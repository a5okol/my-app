import React from 'react'
import Counter2 from '../Counter2/Counter2'

export default class Counter extends React.Component {
    state = {
        counter: 0,
        secondCounter: 0,
        Clicked: false
    };

    addCounter = () => {
        this.setState({
            counter: this.state.counter + 1
        });

// Второ вариант изменения state (защещенный от ассинхронных операций, который могут привести к конфликтам)
        this.setState((prevState) => {
            return {
                secondCounter: prevState.secondCounter + 1
            }
        })
    };

    render() {
        return (
            <div style={{marginTop: '20px'}}>
                <h2>Counter {this.state.counter}</h2>
                <h3>Second Counter (защищенный от асинхронных изменений state) {this.state.secondCounter}</h3>
                <button onClick={this.addCounter}>+</button>
                <button onClick={() => this.setState({counter: this.state.counter - 1})}>-</button>
                <Counter2 />
            </div>
        )

        // вариант возвращения компонентов (только без корневого компонента):
        // return [
        //     <h2 key={1}>Counter {this.state.counter}</h2>,
        //     <button key={2} onClick={this.addCounter}>+</button>,
        // <button key={3} onClick={() => this.setState({counter: this.state.counter - 1})}>-</button>
        // ]

        // Второй вариант возвращения компонентов без корневого компонента:
        // return (
        //     <React.Fragment>
        //         <h2>Counter {this.state.counter}</h2>
        //         <button onClick={this.addCounter}>+</button>
        //         <button onClick={() => this.setState({counter: this.state.counter - 1})}>-</button>
        //     </React.Fragment>
        // )

        // Третий вариант:
        // return (
        //     <>
        //     <h2>Counter {this.state.counter}</h2>
        //     <button onClick={this.addCounter}>+</button>
        //     <button onClick={() => this.setState({counter: this.state.counter - 1})}>-</button>
        //     </>
        // )
    }
}