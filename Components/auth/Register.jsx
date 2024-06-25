'use client'
import React from "react"
import axios from "axios"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useSession } from "next-auth/react"

export const Register = () =>{
    const [name, setName] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const router = useRouter;
    const {data} = useSession();

    


    const submitHandler = async (e) =>{
        e.preventDefault();

    try {
        const {data} = await axios.post(
            `${process.env.API_URL}/api/auth/register`,
            {
                name,
                email,
                password
            }
        )
        if (data?.user){
            router.push("/")
        }
    } catch (error) {
        
    }
}

    return(
        <div  style={{display : "flex " , width:"50%",flexWrap:"wrap"}}>

        <h4 style={{marginTop:"15px",marginBottom:"10px",color:"rgb(148,7,7)",width:"100%"}}>   #########({data?.user?.name})</h4>

         <h4 style={{margin:"10px",color:"rgb(148,7,7)"}}>Register :</h4>
        <form onSubmit={submitHandler}>
            <input type="text" placeholder="name" style={{width :"80%",margin:"10px"}} value={name} onChange={(e) => setName(e.target.value)} required/>
            <input type="text" placeholder="email" style={{width :"80%",margin:"10px"}} value={email} onChange={(e) => setEmail(e.target.value)} required/>
            <input type="text" placeholder="password" style={{width :"80%",margin:"10px"}} value={password} onChange={(e) => setPassword(e.target.value)} required/>
            <button type="submit" style={{margin:"10px" , display:"block",border:"1px solid rgb(158,158,153)"}}>Register</button>
        </form>
        </div>

    )
}