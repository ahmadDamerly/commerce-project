'use client'

import {signOut} from "next-auth/react";
import React from 'react';

export const Logout = () => {
    const logoutHandler = () =>{
        signOut();
    };
  return (
    <div  style={{display : "flex " , width:"50%",flexWrap:"wrap",marginTop:"15px"}}>
       <h4 style={{margin:"10px",color:"rgb(148,7,7)", width:"100%"}}>Logout :</h4>
        
        <button  style={{margin:"10px",border:"1px solid rgb(158,158,153)"}} onClick={logoutHandler}>Logout</button>
        
    </div>
  )
}
