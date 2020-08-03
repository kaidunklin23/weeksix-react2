import React, { Component } from 'react';
import Unicorns from './Unicorns';
import AddUnicorn from './AddUnicorn'

class App extends Component {
  state = {
    unicorns : [
      {name:'Glitter', age:30, color: "pink", id: 1},
      {name: "Yoshi", age: 25, color:"green", id: 2},
      {name: "Sunshine", age:31, color:"yellow", id: 3}
    ]
  }
  addUnicorn = (unicorn) => {
    unicorn.id = Math.random();
    let unicorns = [...this.state.unicorns, unicorn]
    this.setState({
      unicorns: unicorns
    })
  }
  deleteUnicorn = (id) => {
    let unicorns = this.state.unicorns.filter(unicorn => {
      return unicorn.id !== id
    });
    this.setState({
      unicorns: unicorns
    })
  }
  render(){
  return (
      <div className="App">
     <h1>Heyy Yall</h1>
     <p>Wyd?</p>
     <Unicorns deleteUnicorn={this.deleteUnicorn} unicorns={this.state.unicorns}/>
    <AddUnicorn addUnicorn={this.addUnicorn}/>
      </div>
    );
  }
}

export default App;
