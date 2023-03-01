import React, { useState } from 'react';
import './App.css';

import Condition from './Componetes/Condition';
import CreatePassword from './Componetes/CreatePassword';
import PasswordShow from './Componetes/PasswordShow';

function App() {

  const [password, setpassword] = useState({
    uppercase: false,
    lowercase: false,
    number: false,
    sybmol: false
  })
  const [showPassword, generatepassword] = useState("")

  // const[background, changeBackground]=useState(false)


  const generatePassword = () => {
    // console.log(password);

    if((password.lowercase || password.uppercase || password.number || password.sybmol)&& password.length>7){
      // changeBackground(!background)


        const numberArray = "123456789012345678901234567890"
    const sybmolArray = "!@#$%^&*~`?!@#$%^&*~`?"
    const lowercaseArray = "abcdefghijklmnopqrstuvwxyz"
    const uppercaseArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    // const generateword=({uppercase, lowercase, number, sybmol})=>{
    //             const avaiableArray=[
    //             (uppercase ? uppercaseArray: "" ),
    //               (lowercase ? lowercaseArray: "" ),
    //               (number ? numberArray: "" ),
    //               (sybmol ? sybmolArray: "" ),
    //             ]
    //             console.log(avaiableArray);
    // }
    // generateword(password)
    let wordlist = ""
    if (password.lowercase) {
      wordlist = wordlist + lowercaseArray
    }
    if (password.uppercase) {
      wordlist = wordlist + uppercaseArray
    }
    if (password.sybmol) {
      wordlist = wordlist + sybmolArray
    }

    if (password.number) {
      wordlist = wordlist + numberArray
    }
    
    generatepassword(finalpassword(wordlist))
    
finalpassword(wordlist)

    }
    else{
      alert(`Please select at lest one checkbox and password 
                  will be greater than 8 character`)
    }


  


    
  }
  const finalpassword =(wordlist)=>{
    let pass=''
    for(let i=0;i<password.length;i++){
      let randomvalue= Math.round(Math.random()*wordlist.length)
      // console.log(randomvalue);
      pass=pass+wordlist.charAt(randomvalue)
    }
    return pass;
  }
    return (
      <>
        <div className="App">
          <div className='heading'>
            <h1><span>ReactJS</span> Password Generator</h1>
            
          </div>
          <div className='compo'>
            <PasswordShow showPassword={showPassword} generatepassword={generatepassword} />
            <Condition password={password} setpassword={setpassword} />
            <CreatePassword onclick={generatePassword} />
          </div>
        </div>
      </>
    );
  }

  export default App;
