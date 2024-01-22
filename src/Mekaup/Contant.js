import React, { useState } from 'react'
import Foot from './Foot'

const Contant = () => {
  const [contant,setcontant]=useState({names:"", email:"" , phone:"", message:""})
  const handlechange = (e)=>{
  const name =e.target.name;
  const value =e.target.value;
  setcontant({...contant, [name]: value})
  }
  const handlesumbit = (e)=>{
    e.preventDefault()
    console.log(contant)
  }
  return (
    <div>
    <div  className='from'>
    <form method='post' autocomplete="off" onSubmit={handlesumbit}>
    <label>Name</label>
    <input type="text" name='names' onChange={handlechange} value={contant.names} />
    <label >Email</label>
    <input type="email" id="username" name='email' onChange={handlechange} value={contant.email}/>
   <label htmlFor="">Phone</label>
   <input type="tel"  name='phone' onChange={handlechange} value={contant.phone}/>
    <label >Message</label>
    <textarea  rows="6" placeholder='Type your message here' name='message' onChange={handlechange} value={contant.message}/>
    <button id='submit'>Submit</button>
   
    </form>
    </div>
  <div>
  <Foot/>
  </div>

  
    </div>
    // <script>
  // $("#submit").click(function test() {
    
  // })
  // </script>
  )
}

export default Contant