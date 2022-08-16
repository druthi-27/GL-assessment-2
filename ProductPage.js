// import { result } from "lodash";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Product=(props)=>{
    const [pdata,setBook]=useState(props.data)
    const [search,setSearch]=useState('')
    const [result,setResult]=useState([])

    const handleChange=(e)=>{
        setSearch(e.target.value)
    }
    const handleSearch=(e)=>{
        e.preventDefault()
        let result=pdata.filter((item)=>item.author===setSearch)  //searching the book
        setBook(result) 
    }
    return(
        <div >
            <div>
                <Link to='/search'><button >Search</button></Link>   
                <Link to='/price'><button >Price</button></Link>
                <Link to='/rating'><button >Rating</button></Link>
                
               
            </div>

            <div className="container">
                      <div className="row">
               {
                         pdata.map((item)=>(
                                <div className="card hover-shadow cursor">
                                    <div class="card-body ">
                                        <h2>{item.Name}</h2>
                                        <p>Author:{item.author}</p>
                                        <p>Price:{item.price}</p>
                                        <p>Rating:{item.rating}</p>
                                        <p>Punlished:{item.publish}</p>
                                       <button className="product-btn">Buy</button>
                                    </div>
                              </div>
                         ))
        
                    
                }
                </div>
                </div>

        </div>
    )
}
export default Product
