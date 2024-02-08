import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';



function App() {
  
  const [pwd_length,setPwd_lenth] = useState(8);
 
  function length_plus(){
        setPwd_lenth(pwd_length+1);
       
  };
  function length_minus(){
    if(pwd_length>=9){
      setPwd_lenth(pwd_length-1);
    }
    else{
      alert("You need 8 characters for a strong password.")
    }
  };
  const [smallCase, setSmallCase] = useState(false);
  function smallCaseFunc() {
    if(smallCase==false){
      setSmallCase(true);
    }
    else{
      setSmallCase(false);
    }
  }
  const [upperCase, setUpperCase] = useState(false);
  function upperCaseFunc() {
    if(upperCase==false){
      setUpperCase(true);
    }
    else{
      setUpperCase(false)
    } 
  }
  const [numberCase, setNumberCase] = useState(false);
  function numberFunc() {
    if(numberCase==false){
      setNumberCase(true);
    }
    else{
      setNumberCase(false)
    }  
  }
  const [specialChar, setSpecialChar] = useState(false);
  function specialCharFunc() {
    if(specialChar==false){
      setSpecialChar(true);
    }
    else{
      setSpecialChar(false)
    }
  }

  function Generate_Password(){
    const password = Array(pwd_length);
    console.log(pwd_length);
    console.log(smallCase);
    console.log(upperCase);
    console.log(numberCase);
    console.log(specialChar);
    

  }
  return (
    <>
    <h1>Generate password</h1>
    <div className='pwd-length'>Choose a password length {pwd_length}</div>
    <button onClick={length_plus}>+</button>
    <button onClick={length_minus}>-</button>
    <label>
      Select to include small case characters
    <input onChange={smallCaseFunc} type='checkbox'/>
    </label>
    <label>
      Select to include upper case characters
    <input onChange={upperCaseFunc} type='checkbox'/>
    </label>
    <label>
      Select to include numbers
    <input onChange={numberFunc} type='checkbox'/>
    </label>
    <label>
      Select to include special characters
    <input onChange={specialCharFunc} type='checkbox'/>
    </label>
    <button onClick={Generate_Password}>Generate password</button>
    </> 
   
  );  
}

export default App;
