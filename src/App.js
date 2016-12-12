import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class CheerButton extends React.Component {
  constructor(){
    super()
    this.state = {cheers: 0};
    this._cheer4Me = this._cheer4Me.bind(this);
  }

  _cheer4Me(){
    this.setState({cheers: this.state.cheers + 1})
    this.props.handleCheer();
  }


  render(){
    return(
      <div>
          <button onClick={this._cheer4Me}>{this.props.name}</button>
          <h3>I am counting the support here: {this.state.cheers}</h3>
      </div>
      )
  }
}




class App extends Component {
  constructor(){
    super()
    this._showSomeLove = this._showSomeLove.bind(this);
    
  }
  _showSomeLove(){
    alert("Remember, I am watching you !")
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome Nice visitor</h2>
        </div>
        <p className="App-intro">
          My name is Laetitia and I am looking for a job
        </p>
        <h2>If you want to cheer me up, press this button</h2>
        <CheerButton name="Waaaapa"/>
        <h2>But if you think this is a lost battle, go for it!</h2>
        <CheerButton name="booooooo" handleCheer={this._showSomeLove}/>
      </div>
      
    );
  }
}





export default App;
