import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { SliderPicker } from 'react-color';
import axios from 'axios';

class App extends Component {
  state = {
    background: "blue",
  };

  handleChangeComplete = (color) => {
    this.setState({ background: color.hex });
    axios.post('https://williamcostumefunction.azurewebsites.net/api/ChangeColor', {
       params: { 
         code: 'iMzYu34ogAxAt4kYj0MJoaIhyT4lqVbLw7svCUn2bxq1GYUaWh1oOw==',
         color: color.hex
        } 
      }).then(function (response) {
        console.log(response);
      }).catch(function (error) {
        console.log(error);
      })
  };
  
  render() {
    return (
      <div className="App" style={{background: this.state.background}}>
        <header className="App-header" >
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome to William's Costume Site!
          </p>
          <SliderPicker color={ this.state.background } onChangeComplete={ this.handleChangeComplete } className="App-slider" />
        </header>
      </div>
      );
    }
}

export default App;
