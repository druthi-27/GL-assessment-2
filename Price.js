import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Price(props){
    const [price,setPrice]=useState(props.data)
    const [result,setResult]=useState([])
    useEffect(()=>{
        const sorteddata=[...price].sort((x,y)=>Number(x.price)-Number(y.price))
        setResult(sorteddata)
    },[])
    return(
        <div>

              <div>
                <Link to='/search'><button className="sortsearch">Search</button></Link>
                <Link to='/price'><button className="sortprice">Price</button></Link>
                <Link to='/rating'><button className="sortrat">Rating</button></Link>
                
               
            </div>
          <div className="container">
                      <div className="row">
               {
                         result.map((item)=>(
                                <div className="card">
                                   
                                        <h2 style={{color:"#c35aed"}}>{item.Name}</h2>
                                        <p>Author:{item.author}</p>
                                        <p>Price:{item.price}</p>
                                        <p>Rating:{item.rating}</p>
                                        <p>published:{item.publish}</p>
                                       <button className="product-btn">Buy</button>
                                    
                              </div>
                         ))
        
                    
                }
                </div>
                </div>

        </div>
    )
}


