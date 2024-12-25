/* eslint-disable no-unused-vars */
import React from "react";
class Counter extends React.Component { 
  constructor(props) { 
    super(props);
    this.state = { count: 0 };
    console.log("constructor")
  }
  
  componentDidMount() {
    this.setState({ count: 10 })
    console.log("componentDidMount")
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.count === 10) {
      this.setState({ count: 0 })
    }
      console.log("componentDidUpdate")
    }
    render() {
      return (
        <div className="flex items-center">
          <h1 className="mr-5 text-lg">{ this.state.count }</h1>
          <button className="bg-black text-white p-3 text-lg" onClick={() => { this.setState({ count: this.state.count + 1 }) }}>+</button>
          {console.log("render")}
        </div>
      )
      }
  }
 
export default Counter;