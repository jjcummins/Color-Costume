import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { SliderPicker } from 'react-color'; 

class App extends Component {
  state = {
    background: "blue",
  };

  handleChangeComplete = (color) => {
    this.setState({ background: color.hex });
  };
  
  render() {
    return (
      <div className="App" style={{background: this.state.background}}>
        <header className="App-header" >
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome to William's Costume Site!
          </p>
          <SliderPicker color={ this.state.background } onChangeComplete={ this.handleChangeComplete }/>
        </header>
      </div>
      );
    }
}

export default App;
