'use client'



import Link from 'next/link'
import React, { useContext, useState } from 'react'
import './Header.css'
import Image from 'next/image'
import image from '../../mac.jpg'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import CartContext from '@/context/CartContext'

export const Header1 = () => {

const router = useRouter();
const {cart} = useContext(CartContext);

let acc = 0;
cart?.cartItems?.map((i) => {
    acc = acc + i.quantity ;
})






  return (
   <div style={{backgroundColor : 'rgb(118, 126, 126)' }}>
   <div className='container'>
    <div className='h-top'>
        <a href="">Ecommerce</a>
       
        <div>
            <ul>
                <li style={{marginRight:"20px"}}> <a href="/">Home</a></li>
                <li style={{marginRight:"20px"}}><a href="/allProducts">All products</a></li>
                <li style={{marginRight:"20px"}}><a href="/categories">Categories</a></li>
                <li style={{marginRight:"20px"}}><a href="/account">Account</a></li>
                <li style={{marginRight:"20px"}}><a href="/admin">Admin</a></li>
                <li ><a href="/cart">Cart</a></li>
                <li ><span>({acc})</span></li>
            </ul>
        </div>
        <div>

        </div>
    </div>
    <div className='h-bottom'>
        <div className='h-b-l'>
            <h1>Macbook 14 Pro</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quas laudantium dolore tempora recusandae, laboriosam velit cum alias inventore officiis distinctio eum non, necessitatibus dignissimos exercitationem voluptatum aperiam sed? Ad.</p>
            <div className='h-b-l-btn'>
                <button style={{marginRight:"10px",height:"25px"}}>Read more</button>
                <button style={{height:"25px"}}>Add to cart</button>
            </div>
        </div>
        <div className='h-b-r'>
            <Image src={image}></Image>
        </div>
    </div>

   </div>
   </div>
  )
}
