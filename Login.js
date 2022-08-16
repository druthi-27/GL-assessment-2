import React, { useState } from "react"
import {useNavigate} from "react-router-dom"
export default function LogIn(){
    const navigate=useNavigate()
    const navToPage=(url)=>{
       
        navigate(url)
    }
    
    const[name,setName]=useState('')
    const[password,setPassword]=useState('')
    const[userErr,setUserErr]=useState('')
    const[passErr,setPassErr]=useState('')
    const [login,setLogin]=useState(false)
    const userHandler=(e,key)=>{
        
        if(key==='name')
        {
            setName(e.target.value)
        }
       if(key==='password'){
            setPassword(e.target.value)
        }
        
    }
    const handleLogin=(e)=>{
        if(name==='admin'&&password==='admin')  //name and password both are admin here
        {
            setLogin(true)
            console.log("true")
        }
        else{
            setLogin(false)
            console.log("false")
        }
    }
    const handleBlurEvent=(e,key)=>{
        if(key==='name'){
         if(e.target.value){
             setUserErr(e.target.value)
             setUserErr('')
             
         }
         else{
             setUserErr('Please Enter the Username')  //if it is not admin  then ask for reenter
         }
        }
        if(key==='password'){
         if(e.target.value){
             setPassErr(e.target.value)
             setPassErr('')
         }
         else{
             setPassErr('Please Enter the password')  //if it is not admi  then ask for reenter
         }
        }
       
     }
    return(
        <div className="submit">
             {
                login?<h1></h1>:<h5 className="name">Please login!</h5> //checking whether it is logged in or not
          }
           <form className="order">
            <h5>LogIn</h5>
          Name:<input type="text" onChange={(e)=>userHandler(e,"name")} onBlur={(e)=>handleBlurEvent(e,'name')}  ></input>
          <span>{userErr}</span>
        Password:<input type="text"   onChange={(e)=>userHandler(e,"password")} onBlur={(e)=>handleBlurEvent(e,'password')}/>
        <span>{passErr}</span>
        <button onClick={()=>navToPage('/dashboard')}>Submit</button>   
        </form>   
            
        </div>
    )
}