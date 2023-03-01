import React from 'react'
import '../CSS_files/Condition.css'

const Length = ({label,onchange}) => {
  return (
   <>
 <div className='input-length'>
 <label>{label}</label> <input type="number"  name="" id="" onChange={(e)=>{
    onchange(e.target.value);
  }}/>
 </div>
   </>
  )
}

export default Length