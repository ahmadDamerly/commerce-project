'use client'



import Link from "next/link";
import React, { useState } from "react";
import {signIn ,} from 'next-auth/react';
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/navigation";

 export const Login = () => {
    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");
    const router = useRouter();



    const submitHandler =  async (e) => {
        e.preventDefault();

        const data = await signIn('credentials',{
            email,
            password,
            redirect: false,
        })
        console.log("89898989898989898989")
        console.log(data?.user)
        console.log("89898989898989898989")

        if(data?.error){
            console.log("EEEEEEEEEEEEEEEEEEEEEEEEEEERRRR")
        }
        if(data?.ok){
            console.log("OKOKKOKKKKOKOKOKOK")
            // router.push('/')
        }
    };
    return(
        <div  style={{display : "flex " , width:"50%",flexWrap:"wrap",marginTop:"15px"}}>

         <h4 style={{margin:"10px",color:"rgb(148,7,7)", width:"100%"}}>Login :</h4>
        <form onSubmit={submitHandler}>
            <input type="text" placeholder="email" style={{width :"100%",margin:"10px"}} value={email} onChange={(e) => setEmail(e.target.value)} required/>
            <input type="text" placeholder="password" style={{width :"100%",margin:"10px"}} value={password} onChange={(e) => setPassword(e.target.value)} required/>
            <button type="submit" style={{margin:"10px",border:"1px solid rgb(158,158,153)"}}>Login</button>
        </form>
        </div>
    )
}   
