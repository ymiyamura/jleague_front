import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Sample from './Sample';
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {rankings: []}
  }
  componentDidMount() {
    axios.get("/resource.json").then((response) => {
      this.setState({rankings: response.data.tables})
      console.log(this.state.rankings)
    }).catch((response) =>{
      console.log(response)
      console.log("errorroror")
    })
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React Hey!</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Sample data={this.state.rankings}/>
      </div>
    );
  }
}

export default App;
