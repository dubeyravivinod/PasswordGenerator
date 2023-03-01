import React from 'react'
import '../CSS_files/Condition.css'

const Checkbox = ({label,onchange}) => {
  return (
    <>
 <div className='checkbox'>
 <label>{label}</label> <input type="checkbox" name="" id="" onChange={()=>{
    onchange();
   }} />
 </div>
    </>
  )
}

export default Checkbox