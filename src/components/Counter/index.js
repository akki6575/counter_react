import {Component} from 'react'

import './index.css'

class Counter extends Component {
  state = {count: 0}

  onDecrement = () => {
    // let {count} = this.state
    this.setState(prevState => ({count: prevState.count - 1}))
  }

  onIncrement = () => {
    // let {count} = this.state
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  //   render() {
  //     const {count} = this.state

  //     return (
  //       <div className="app-container">
  //         <h1 className="count">Count {count}</h1>
  //         <button className="button" onClick={this.onIncrement} type="button">
  //           Increase
  //         </button>
  //         <button className="button" onClick={this.onDecrement} type="button">
  //           Decrease
  //         </button>
  //       </div>
  //     )
  //   }
  render() {
    const {count} = this.state
    return (
      <div className="app-container">
        <h1 className="count">Count {count}</h1>
        <button className="button" type="button" onClick={this.onIncrement}>
          Increase
        </button>
        <button className="button" type="button" onClick={this.onDecrement}>
          Decrease
        </button>
      </div>
    )
  }
}

export default Counter
