import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from "./Home";
import NavBar from "./NavBar";
import SignUp from "./SignUp";
import LogIn from "./Login";
import DashBoard from "./Dashboard";
import Product from "./ProductPage";
import pdata from "./Pdata";
import Price from "./Price";
export default function App(){
    return(
        <div>
            <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
        <Route path="/" element={<Home></Home>}/>
        <Route path="/signup" element={<SignUp></SignUp>}/>
        <Route path="/login" element={<LogIn></LogIn>}/>
        <Route path="/dashboard" element={<DashBoard></DashBoard>}/>
        <Route path="/productpage" element={<Product data={pdata}></Product>}/>
        <Route path="/price" element={<Price data={pdata}></Price>}/>
        </Routes>
        </BrowserRouter>
        
        
            
    
        </div>
    )
}