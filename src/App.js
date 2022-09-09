import React from "https://cdn.skypack.dev/react@17.0.1";
import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import ClearBtn from './components/ClearBtn';
// import { useState, useEffect } from 'react';
import { evaluate } from 'mathjs';

function App() {

  let initialState = "0";
  const [input, setInput] = React.useState(initialState);

  let regOperator = /(\*|\+|\/|-)?(\.|\-)?\d+/g

  const addInput = value => {

    let newState = () => {
      if(/^0(?!\.)/.test(input) === true && /\d/.test(value) === true) {
      //  return input.replace(/^0(?!\.)/, "")
      return input.slice(1) + value
    }
    // else if (input[0] === "0" && value === "0") {
    //   return input + ""
    // }
    else if (/\.$/.test(input) === true && value === ".") {
      return input + ""
    } 
    // else if(/\-{2}$/.test(input) && value === "-") {
    //   return input + ""
    // // }
    // else if(regOperator.test(input[input.length - 1]) === true && regOperator.test(value) === true) {
    //   return input + ""
    // }
    else if (/(?=\.)\.(?=\d)\d(?![\d\-+*/])/g.test(input) === true && value === ".") {
      return input + ""
    }
    else {
      return input + value
      }
    }
    setInput(newState())
  };

  const result = (str) => {
    if(str) {
      let filtered = str.match(regOperator).join("")
      setInput(evaluate(filtered.trimEnd()))
    }
  };

  // React.useEffect(() => {
  //   setInput(result(input))
  // }, [input])

  return (
  <div className='App'>
    <div className='logo-and-calculator'><h1><a href="twitter/Xaida02" target="_blank">twitter/Xaida02</a></h1>
      <div className='calculator-container'>      
        <div className='column'>
          <Input
            input={input} />
        </div>
        <div className='column'>
          <Button handleClick={addInput} id="one">1</Button>
          <Button handleClick={addInput} id="two">2</Button>
          <Button handleClick={addInput} id="three">3</Button>
          <Button handleClick={addInput} id="add">+</Button>
        </div>
        <div className='column'>
          <Button handleClick={addInput} id="four">4</Button>
          <Button handleClick={addInput} id="five">5</Button>
          <Button handleClick={addInput} id="six">6</Button>
          <Button handleClick={addInput} id="subtract">-</Button>
        </div>
        <div className='column'>
          <Button handleClick={addInput} id="seven">7</Button>
          <Button handleClick={addInput} id="eight">8</Button>
          <Button handleClick={addInput} id="nine">9</Button>
          <Button handleClick={addInput} id="multiply">*</Button>
        </div>
        <div className='column'>
          <Button handleClick={()=>result(input)} id="equals">=</Button>
          <Button handleClick={addInput} id="zero">0</Button>
          <Button handleClick={addInput} id="decimal">.</Button>
          <Button handleClick={addInput} id="divide">/</Button>
        </div>
        <div className='column'>
            {/* The display zero test makes no sense */}
            <ClearBtn handleClear={() => setInput(initialState)}>
              Clear
            </ClearBtn>
        </div>
      </div>
  </div>
 </div>)
}

export default App;


