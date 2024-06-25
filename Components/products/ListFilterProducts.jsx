
import React from 'react'
import { Item } from '../Item/Item'

export const ListFilterProducts = (props) => {
    let category = props.category ;
    let data = props?.data ;
    console.log("(((((((((((((((")
  return (
 

<div style={{boxShadow : " 19px black"}}>
<div className="container" style={{paddingBottom : '20px'}} >
  <div style={{display : 'flex', gap :'40px' , flexWrap:'wrap'}}>

     
        {data?.products?.map((product)=>{
            return(product.category===category?
                <Item key={product?._id} product={product}/> : ""

       
            )
         })}
    </div>
    </div>
    </div>
  )
}
