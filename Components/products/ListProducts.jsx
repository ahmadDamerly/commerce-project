
import React from 'react'
import { Item } from '../Item/Item'

export const ListProducts = ({data}) => {
  return (
   

<div style={{backgroundColor :'rgb(233, 227, 227)'}}>
<div className="container" style={{paddingBottom : '40px'}} >
  <h2 style={{padding : "30px 0px"}}>New Arrivals</h2>
  <div style={{display : 'flex', gap :'40px' , flexWrap:'wrap'}}>

     
        {data?.products?.map((product)=>(

            <Item key={product?._id} product={product}/>
        ))}
    </div>
    </div>
    </div>
  )
}
