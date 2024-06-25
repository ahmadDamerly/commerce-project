'use client'

import axios from 'axios'
import { useRouter } from 'next/navigation'
import { Router } from 'next/router'
import React from 'react'

export const DeleteProduct = ({id}) => {


        const router = useRouter()
    const deleteProduct =  async  (id) =>{
        try {
            console.log("::::::::::::::::::::")
            console.log(id)
            console.log(`${process.env.API_URL}/api/products`)
            await axios.delete(
                `${process.env.API_URL}/api/products/${id}`
                
            );
           
        } catch (error) {
            console.log("ERRORRRRRRRRRRRRRRRRR")
        }
    }
    const submitHandler = () =>{
        console.log("?????????????????????")
        console.log(id)
        deleteProduct(id);  
        router.refresh("/admin")
    }
    
   
  return (
    <div>
        <button onClick={submitHandler} style={{textDecoration:"none",marginRight:"20px",border:"1px solid rgb(158,158,153)"}}>Delete</button>
    </div>
  )
}
