import "./App.css";

import React, { Component } from 'react'

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      arr:[]
    }
  }
  render() {
    return (
      <div className="App">
        <header>
          <form>
            <input type="text" id="to-do-form" />
            <button type="submit">ADD</button>
            </form>
          </header>
      </div>
    )
  }
}

export default App;
