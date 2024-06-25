'use client'


import { Header1 } from '@/Components/Header/Header1';
import CartContext from '@/context/CartContext';
import React, { useState } from 'react'

import { useContext } from 'react'


const page = () => {
  const {cart,addItemToCart, removeItemFromCart} = useContext(CartContext);

  let totalWithoutShipping = 0;
  cart?.cartItems?.map((product)=> {
    totalWithoutShipping = totalWithoutShipping + product.price * product.quantity
  }
  )
  let shipping = (totalWithoutShipping * 0.15) .toFixed(2)
  return (
    <div>
    <div className='container' style={{marginTop:"80px"}}>
      {console.log("MMMMMMMMMMMMMMMMMMMMM")}
      {console.log(cart)}
      {console.log(cart.cartItems)}
      <h3 style={{marginBottom : "0px",color:"rgb(129, 129, 125)"}}>Cart Details :</h3>
      <table style={{marginTop:"0px"}}>
        <tbody>
        <tr style={{height:"70px"}}>
            <td style={{width:"100px"}}>image</td> 
            <td style={{width:"100px"}}>name</td> 
            <td style={{width:"100px"}}>price</td> 
            <td style={{width:"100px"}}>quantity</td> 
            <td style={{width:"100px"}}>totalPrice</td> 
            <td style={{width:"100px"}}>addOne</td>
            <td style={{width:"100px"}}>removeOne</td>  
            </tr>
         

                 {cart?.cartItems?.map((product)=> (

                    <tr>
                      <td><img src={product.image} style={{width:"70px",height:"70px"}} /></td>
                      <td>{product.name}</td>
                      <td>{product.price} $</td>
                      <td>{product.quantity}</td>
                      <td>{product.price * product.quantity} $</td>
                      <td><button onClick={()=>{  addItemToCart({
                            product: product.product,
                            name: product.name,
                            price: product.price,
                            image: product.image,
                            stock: product.stock,
                            seller: product.seller,
                          })}}>
                            AddOne
                            </button>
                            </td>
                      <td><button onClick={()=>{  removeItemFromCart({
                              product: product.product,
                              name: product.name,
                              price: product.price,
                              image: product.image,
                              stock: product.stock,
                              seller: product.seller,
                            })}}>RemoveOne</button></td>
                    </tr>
                 
       
))}
         
          </tbody>
      </table>
      <p style={{marginTop : "40px"}}>Total Without Shipping = {totalWithoutShipping} $</p>
      <p>Shipping =  {shipping} $</p>
      <p>Total = {totalWithoutShipping + shipping } $</p>

    </div>
    </div>
  )
}

export default page;