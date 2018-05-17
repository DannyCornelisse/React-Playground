import React, { Component } from 'react';
import Person from './../Person/Person';

let names = ['hi', 'bla'];

class Test extends Component {
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
    }

    clickHandler = () => {
        const names = this.state.names;
        names[0] = 'teststtstttstttststststststst';

        this.setState({ names });
    }

    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>clickssssss</button>
                <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <p>hello!!!!!!!!!</p>
                {this.state.names.map(name => <Person key={name} name={name} />)}
                <Person>hello from child</Person>
            </div>
        );
    }
}

export default Test;