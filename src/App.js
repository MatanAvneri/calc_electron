import React, { Component } from 'react';
import Button from './Button';
import Result from './Result';
import './App.css';

const ARITHMETIC_OPERATIONS = ['%', '*', '-', '+']
const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3]
// ...Array(9).keys()
class App extends Component {
  render() {
    return (
      <div className="App">
        <Result>
          0
        </Result>
        <div className="buttons-container">
          <div className='inputs'>
            <Button>AC</Button>
            <Button>+/-</Button>
            <Button>%</Button>
            {
              numbers.map((number) => {
                return (
                  <Button>{number}</Button>
                )
              })
            }
            <Button className='zero-value'>0</Button>
            <Button>.</Button>
          </div>
          <div className='container'>
            {
              ARITHMETIC_OPERATIONS.map((action) => (
                <Button operation>{action}</Button>
              ))
            }
            <Button operation>=</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
