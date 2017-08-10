import React, { Component} from 'react';
import './App.css';
import './css/font.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="header">
                    <div className="headerContain">
                        <text className="font-white font-4rem">魏清峰</text>
                        <text className="font-white font-2rem">Android开发工程师</text>
                    </div>
                </div>
                <div className="center"></div>
            </div>
        );
    }
}

export default App;
