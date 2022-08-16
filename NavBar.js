import React from "react";
import './nav.css'
import {Link} from "react-router-dom"
export default function NavBar(){
    return(
        <nav>
             <h2> Welcome</h2>
                <Link  to="/">Home</Link>
                <Link to="/login">LogIn</Link>
                 <Link to='/productpage'>Product</Link>
        </nav>
    )
} //linked all the nav bars