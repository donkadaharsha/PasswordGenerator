import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';



function App() {
  
  const [plus,setPlus] = useState(8);
  
  
  function length_plus(){
        setPlus(plus+1);
  };
  function length_minus(){
    if(plus>=9){
    setPlus(plus-1);
    }
    else{
      alert("You need 8 characters for a strong password.")
    }
  };

  return (
    <>
    <h1>Generate password</h1>
    <div className='pwd-length'>Choose password length {plus}</div>
    <button onClick={length_plus}>+</button>
    <button onClick={length_minus}>-</button>
    </> 
  );  
}

export default App;
