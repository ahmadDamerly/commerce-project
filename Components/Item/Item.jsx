'use client'

import Image from 'next/image'
import React, { useContext } from 'react'
import './Item.css'
import Link, { NavLink } from 'react-router-dom'
import CartContext from '@/context/CartContext'



export const Item = ({product}) => {
  const {addItemToCart} = useContext(CartContext);
  
  const  myurl = product?.images[0]?.url ;
  let mylink = "/product/" + product._id
  return (
    <>
    {console.log("@@@@@@@@@@@@@@@@@@@@")}
    {console.log(mylink)}

      
      <div className='cart' >
      {console.log("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz")} 
      {console.log(product.price)} 

        <div className='cart-top'> 
        <a href={mylink}>
        <img src={myurl} alt="" style={{height : '70px' , width : '70px'}}/>
        </a>
        </div>
        <div className='cart-bottom'>
            <p>{product.name}</p>
            <div className='item-disc'>
                <p>{product.price}</p>
                <button onClick={()=>{  addItemToCart({
                            product: product._id,
                            name: product.name,
                            price: product.price,
                            image: product.images[0].url,
                            stock: product.stock,
                            seller: product.seller,
                          })}}>
                            Add To Cart
                            </button>
            </div>
        </div>
    </div>
   
    </>     
    
  )
}
