import React, { Component} from 'react';
import './App.css';
import './css/font.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="header">
                    <div className="headerContain">
                        <img className="imgHead" src={require('./image/icon_bg_small.png')} alt="未正确显示"/>
                        <text className="font-white font-2vw marginTop">魏清峰</text>
                        <text className="font-white font-1vw marginTop">Android开发工程师</text>
                    </div>
                </div>
                <div className="center"></div>
            </div>
        );
    }
}

export default App;
