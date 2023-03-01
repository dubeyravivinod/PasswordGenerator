import React from 'react'
import '../CSS_files/Condition.css'
import Checkbox from './Checkbox'
import Length from './Length'
const Condition = ({password, setpassword ,notcheck,check}) => {
  const{uppercase, lowercase, number, sybmol}=password

  const handelUpperCaseChange=()=>{
// console.log("handelUpperCaseChange");
    setpassword({
      ...password,
      uppercase:! uppercase
    })
    check(true)
    // console.log(check);
  }
  const handelLowerCaseChange= ()=>{
    // console.log("handelLowerCaseChange")
    setpassword({
      ...password,
      lowercase: ! lowercase
    })
    check(true)

  }
const handelNumberChange= ()=>{
  // console.log("handelNumberChange")
  setpassword({
    ...password,
    number: ! number
  })
}
const handelSybmolChange= ()=>{
  // console.log("handelSybmolChange")
  setpassword({
    ...password,
    sybmol: ! sybmol
  })
}
const handelLengthChange= (length)=>{
  // console.log("handelLengthChange")
  setpassword({
    ...password,
    length: length
  })
  // console.log(password);
}

  return (
    <>
    <div className='Condition'>
      <Checkbox  label={"Include uppercase letters"} onchange={handelUpperCaseChange}/>
      <Checkbox label={" Include lowercase letters "} onchange={handelLowerCaseChange}/>
      <Checkbox label={" Include number"} onchange={handelNumberChange}/>
      <Checkbox label={" Include Sybmol"} onchange={handelSybmolChange}/>
      <Length label={"Password length"} onchange={handelLengthChange}/>
    </div>
    </>
  )
}

export default Condition