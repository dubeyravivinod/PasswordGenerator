import React from 'react'
import '../CSS_files/CreatePassword.css'
const CreatePassword = ({onclick}) => {
  return (
    <>
    <div className='CreatePassword'>
        <button onClick={()=>{
          onclick()
          // console.log();
          }}>Generator password</button>
    </div>
    </>
  )
}

export default CreatePassword