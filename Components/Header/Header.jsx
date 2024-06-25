'use client'



import Link from 'next/link'
import React, { useContext, useState } from 'react'
import './Header.css'
import Image from 'next/image'
import image from '../../mac.jpg'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import CartContext from '@/context/CartContext'

export const Header = () => {

const [keyword,setKeyword] = useState('')
const router = useRouter();
const {cart} = useContext(CartContext);

let acc = 0;
cart?.cartItems?.map((i) => {
    acc = acc + i.quantity ;
})


 console.log("(((((++++++++++++++++++++))))))")
 console.log(keyword)

const submitHandler = (e) =>{
    e.preventDefault();
    if (keyword) {

        router.replace(`/?keyword=${keyword}`)
    }else{
        router.push('/')
    }
}

  return (
   <div style={{backgroundColor : 'rgb(118, 126, 126)' }}>
   <div className='container'>
    <div className='h-top'>
        <a href="">Ecommerce</a>
       
        <div>
            <ul>
                <li> <a href= '/' >Home</a></li>
                <li><a href="/allProducts">All products</a></li>
                <li><a href="/categories">Categories</a></li>
                <li><a href="/account">Account</a></li>
                <li><a href="/admin">Admin</a></li>
                <li><a href="/cart">Cart</a></li>
                <li><span>({acc})</span></li>
            </ul>
        </div>
        <div>
            <form style={{display:"flex", alignItems:"center"}}>
            <input type="text" placeholder='Search' style={{paddingLeft : '10px'}}
            onChange={(e) => setKeyword(e.target.value)}
            />
            <button style={{marginLeft : '0px',height:'28px',width:"40px",border:"0px solid rgb(118, 126, 126)"}}
            onClick={submitHandler}
          
            >Enter</button>

            </form>
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
