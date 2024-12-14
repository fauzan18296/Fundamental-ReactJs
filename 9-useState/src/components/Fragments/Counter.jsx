import React from "react";
class Counter extends React.Component { 
  constructor(props) { 
    super(props);
    this.state = { count: 0 };
   }
    render() {
      return (
        <div className="flex items-center">
          <h1 className="mr-5 text-lg">{ this.state.count }</h1>
          <button className="bg-black text-white p-3 text-lg" onClick={() => { this.setState({ count: this.state.count + 1 }) } }>+</button>
        </div>
      )
      }
  }
 
export default Counter;