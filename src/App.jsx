import React from 'react';
import { Component, ReactNode } from 'react';
import Home from './components/home/Home'

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="appContentContainer">
                <Home />
            </div>
        );
    }
}

export default App