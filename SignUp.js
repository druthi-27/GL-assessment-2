import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
export default function SignUp(){
    const navigate=useNavigate()
    const navToPage=(url)=>{
       
        navigate(url)
    }


    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[phone,setPhone]=useState('')
    const[city,setCity]=useState('')
    const[age,setAge]=useState('')
    const[password,setPassword]=useState('')
    return(
        <div>
        <h2 style={{color:"#605985", textAlign:"center"}}>Please Register Here</h2>
        <div className="register">
            
            <form className="buy">
                Name:<input type="text" value={name} onChange={(e)=>setName(e.target.value)}></input>
                Email:<input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
                Phone:<input type="number" value={phone} onChange={(e)=>setPhone(e.target.value)}></input>
                City:<input type="text"  value={city} onChange={(e)=>setCity(e.target.value)}></input>
                Age:<input type="number"  value={age} onChange={(e)=>setAge(e.target.value)}></input>
                Password:<input type="text"value={password} onChange={(e)=>setPassword(e.target.value)}></input>
                <button onClick={()=>navToPage('/login')}>LogIn</button>
            </form>
        </div>
        </div>
    )
}