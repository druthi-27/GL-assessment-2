import {useNavigate} from "react-router-dom"
export default function  Home(){
    const navigate=useNavigate()
    const navToPage=(url)=>{
       
        navigate(url)
    }
return(
    <div>
        <h2 style={{color:"#361bbf",textAlign:"center", margin:"4% 0% 4% 0%" ,fontFamily:"cursive"}}>Welcome to Jenny BookStore</h2>
        
        <button onClick={()=>navToPage('/signup')}>Register</button>
        <br/>
        <button onClick={()=>navToPage('/login')}>LogIn</button> 
    </div>// navigates to another page
)
}