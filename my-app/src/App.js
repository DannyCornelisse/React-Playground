import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './components/Person/Person';

const names = ['hi', 'bla'];

class App extends Component {
  something = 'hello from something';
  vm = this;
  state = {
    names
  };
  constructor() {
    super();
    this.thisTesty();
  }

  thisTesty() {
    console.log(this);
    debugger;
  }

  clickHandler = () => {
    debugger;
    const names = this.state.names;
    names[0] = 'teststtstttstttststststststst';

    this.setState({ names });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <p>{this.something}</p>
        </header>
        <button onClick={this.clickHandler}>clickssssss</button>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>hello!!!!!!!!!</p>
        {this.state.names.map(name => <Person key={name} name={name} />)}
        <Person>hello from child</Person>
      </div>
    );
    // return React.createElement('div', null, React.createElement('h1', {className: 'app'}, 'hello from h1'));
  }
}

export default App;
