import React from 'react'
import '../CSS_files/PasswordShow.css'
const PasswordShow = ({showPassword,generatepassword}) => {
  return (
   <>
    <div className="PasswordShow">
        <input type="text" value={showPassword} name="" id="" onChange={(e)=> generatepassword(e.target.value)} />
        <button onClick={()=>{
          console.log(showPassword,'abc');
          navigator.clipboard.writeText(showPassword)
          alert(`Your password will copied`)
          setInterval(()=>{
            generatepassword("")
          },4000)
        }}>copy</button>
    </div>
   </>
  )
}

export default PasswordShow