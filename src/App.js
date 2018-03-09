import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {LineChart} from 'react-easy-chart'

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        data: [
          //user 1
          [
            { x: 0, y: 0 }
          ],
          //user 2
          [
            { x: 0, y: 1 }
          ]
        ],
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 1
      }
   }

  getDataUpdate(){
    var data = this.state.data;
    var x1 = this.state.x1+1;
    var y1 = ~this.state.y1;
    var x2 = this.state.x2+1;
    var y2 = ~this.state.y2;
    data[0].push({ x: x1, y:  y1});
    data[1].push({ x: x2, y:  y2});
    this.setState((state) => ({
      data: data,
      x1: x1,
      y1: y1,
      x2: x2,
      y2: y2
    }))
  }

  componentDidMount() {
      setInterval(() => this.getDataUpdate(), 1000);
   }
  render() {
    return (
      <div className="App">
        <header className="App-header"/>{/*
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>*/}
        <div className="App-graph">
          <LineChart
            //labeling
            axes
            axisLabels={{x: 'Visibility', y: 'Time'}}
            //size params
            height={200}
            width={1000}
            margin={{top: 10, right: 10, bottom: 25, left: 50}}
            
            //user lines/displayed data
            data={this.state.data}
            //smoothing the graph along a cardinal line
            //https://rma-consulting.github.io/react-easy-chart/line-chart/index.html#interpolate
            interpolate={'basis'}
          />
        </div>
      </div>
    );
  }
}

export default App;
