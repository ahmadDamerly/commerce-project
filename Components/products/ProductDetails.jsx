'use client'

import React , {useContext} from 'react'
import "./ProductDetails.css"
import CartContext from '@/context/CartContext'

export const ProductDetails = ({product}) => {
  const {addItemToCart } = useContext(CartContext)
  const  myurl = product?.images[0]?.url ;
  const  myurl1 = product?.images[1]?.url ;
  const  myurl2 = product?.images[2]?.url ;
  const  myurl3 = product?.images[3]?.url ;
  const addToCartHandler =() =>{
    console.log("((((((FFFFFFFFFFFFFFF)))))))")
    addItemToCart({
      product: product._id,
      name: product.name,
      price: product.price,
      image: product.images[0].url,
      stock: product.stock,
      seller: product.seller,
    })
  }

  return (
    <div className='parent container'>
      <div className='left'>
        <div className='main'>
         <img src={myurl} alt="" />
       </div>
       <div className='bottom'>
       <img src={myurl1} alt="" />
       <img src={myurl2} alt="" />
       <img src={myurl3} alt="" />
       </div>
      </div>
      <div className='right'>
        <h1>{product.name}</h1>
        <p>{product.description}</p> 
        <div className='price'>
        <p style={{margin :"0px" , padding:"0px"}}>${product.price}</p>
        <button onClick={addToCartHandler}>Add To Cart</button>
        </div>

      </div>
    </div>
  )
}
