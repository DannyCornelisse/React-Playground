import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home/Home';
import Test from './components/Test/Test';


class App extends Component {

  componentWillMount() {
    console.log('component will mount');
  }

  componentDidMount() {
    console.log('component mounted');
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // If we have a snapshot value, we've just added new items.
    // Adjust scroll so these new items don't push the old ones out of view.
    // (snapshot here is the value returned from getSnapshotBeforeUpdate)

  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <p>{this.something}</p>
        </header>
        <nav className="navbar navbar-light">
          <ul className="nav navbar-nav">
            <li><Link to="/home">Homes</Link></li>
            <li><Link to="/test">Test</Link></li>

          </ul>
       </nav>

      <Switch>
        <Route path="/home" component={Home}/>
        <Route path="/test" component={Test}/>
      </Switch>
      </div>
    );
    // return React.createElement('div', null, React.createElement('h1', {className: 'app'}, 'hello from h1'));
  }
}

export default App;
