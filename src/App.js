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
    if(numberCase===false){
      setNumberCase(true);
      
    }
    else{
      setNumberCase(false)
    }  
  }
  const [specialChar, setSpecialChar] = useState(false);
  function specialCharFunc() {
    if(specialChar===false){
      setSpecialChar(true);
      
    }
    else{
      setSpecialChar(false)
    }
  }
  
  function Generate_Password() {
    const password = Array(pwd_length);
    let a = 0;
    let b = 0;
    let c = 0;
    let d = 0;
    if(smallCase===true){
       a=1;
    }
    if(upperCase===true){
       b=1;
    }
    if(numberCase===true){
       c=1;
    }
    if(specialChar===true){
       d=1;
    }
  
    const smallLetters = 'abcdefghijklmnopqrstuvwxyz';
    const UpperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '1234567890'
    const specials = '!@#$ %^&*()_+-={}[]|:;"<>,.?/~`'
    let i=0;

    while(i<pwd_length){
      if(smallCase===true && i<pwd_length){
        const random_idx = Math.floor(Math.random() * smallLetters.length);
          const randomSmallLetter = smallLetters.charAt(random_idx);
          password.push(randomSmallLetter);
          i++;
      }
      if(upperCase===true && i<pwd_length){
        const random_idx = Math.floor(Math.random() * UpperLetters.length);
        const randomUpperLetter = UpperLetters.charAt(random_idx);
        password.push(randomUpperLetter);
        i++;
      }
      if(numberCase===true && i<pwd_length){
        const random_idx = Math.floor(Math.random() * numbers.length);
        const randomNumbers = numbers.charAt(random_idx);
        password.push(randomNumbers);
        i++;
      }
      if(specialChar===true && i<pwd_length){
        const random_idx = Math.floor(Math.random() * specials.length);
        const randomSpecials = specials.charAt(random_idx);
        password.push(randomSpecials);
        i++;
      }
    }
    shuffle_password(password);
  }
  const [final_pwd, setFinalPwd] = useState();
    
    //fisher-yates shuffling algorithm
    function shuffle_password(password){
      console.log(password);
      var i = password.length,j,temp;
      while(--i > 0){
        j = Math.floor(Math.random() * (i+1))
        temp = password[i];
        password[i] = password[j];
        password[j] = temp;
      
      }
      let shuffled_password = password.join('');
      console.log(shuffled_password);
      setFinalPwd(shuffled_password);
     
    }

    function copyToClipboard() {
      navigator.clipboard.writeText(final_pwd);
      alert('Password copied to clipboard!');
    }

    return (
      <div className="container">
        <h1>Generate password</h1>
        
        <div id="password-box">   <span className='password'>{final_pwd}</span></div>
      
        <button className='copy-btn' onClick={copyToClipboard}>Copy</button> 
        <div className="plus-minus-buttons">
          <button onClick={length_minus}>-</button>
          <div className="pwd-length">Choose a password length: {pwd_length}</div>
          <button onClick={length_plus}>+</button>
        </div>
        <div className="checkbox-group">
          <label className="label-checkbox">
            <input type="checkbox" onChange={smallCaseFunc} /> Small Case
          </label>
          <label className="label-checkbox">
            <input type="checkbox" onChange={upperCaseFunc} /> Upper Case
          </label>
        </div>
        <div className="checkbox-group">
          <label className="label-checkbox">
            <input type="checkbox" onChange={numberFunc} /> Numbers
          </label>
          <label className="label-checkbox">
            <input type="checkbox" onChange={specialCharFunc} /> Special Characters
          </label>
        </div>
        <button onClick={Generate_Password}>Generate password</button>
      </div>
    );
    
}

export default App;
