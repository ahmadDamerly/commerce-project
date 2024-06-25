
import React from 'react'
import { Item } from '../Item/Item'

export const ListAllProducts = ({data}) => {
  return (
   

<div>
<div className="container" style={{paddingBottom : '40px'}} >
  <div style={{display : 'flex', gap :'40px' , flexWrap:'wrap'}}>

     
        {data?.products?.map((product)=>(

            <Item key={product?._id} product={product}/>
        ))}
    </div>
    </div>
    </div>
  )
}
