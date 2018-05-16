import React, { Component } from 'react';

class Person extends Component {
    constructor() {
        super(); // call because you extend!
        this.test = 'testy';
    }

    clicky() {
        console.log('clicky');
    }

    render(props) {
        return (
            <div>
                <h2 onClick={this.clicky}>hello {this.props.name} ++ {this.test}</h2>
                <button onClick={this.clicky}>click meeeee</button>
                <h1>{this.props.children}</h1>
            </div>
        );
    }
}

export default Person;