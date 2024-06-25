'use client'

import axios from 'axios'
import { getSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'






const   NewProduct =  () => {
    const router = useRouter()
    const [product, setProduct] = useState({
        name :'',
        description:'',
        seller :'',
        price:'',
        stock:'',
        category:''
    })

    const {name,description,seller,price,stock,category} = product;

    const onChange = (e) => {
        setProduct({ ...product,[e.target.name]: e.target.value})
    }



    const newProduct = async(product) =>{
        try {
            console.log("###########################")
            const{data} = await axios.post(
                `${process.env.API_URL}/api/products`,
              product,
              {
               headers : {'Content-Type': 'application/json'}
              }
            );
            console.log("###########################")
            console.log(data)
           
        } catch (error) {
            
        }
    }

    const submitHandler = (e) =>{
        e.preventDefault();
        {console.log("9999999999999999999999999999999999999999999999")};
        {console.log(product)};
        newProduct(product);
        router.refresh('/admin')

        
    }
    
    
      
      
   

    const categories = [
        "Laptops",
        "Mobiles",
        "TvScreens",
    ];




  

   

    // const mylink = "http://localhost:3000/admin/products/" ;

    


  return (
    <>



    <div className='First' style={{display : "flex " , width:"50%",flexWrap:"wrap"}}>
        <h4 style={{margin:"20px",color:"rgb(148,7,7)"}}>Create new product :</h4>
        {console.log("heloooooooooo")}
        <form onSubmit={submitHandler}>
            <input type="text" placeholder='Name' style={{width :"70%",margin:"10px"}} name="name" value={name} onChange={onChange}/>
            <input type="text" placeholder='Description' style={{width :"70%",margin:"10px"}}name="description" value={description} onChange={onChange} />
            <input type="text" placeholder='Price' style={{width :"70%",margin:"10px"}} name="price" value={price} onChange={onChange}/>
            <input type="text" placeholder='Category' style={{width :"70%",margin:"10px"}}name="category" value={category} onChange={onChange}/>
            <input type="text" placeholder='Seller/Brand' style={{width :"70%",margin:"10px"}} name="seller" value={seller} onChange={onChange}/>
            <input type="text" placeholder='Stock' style={{width :"70%",margin:"10px"}} name="stock" value={stock} onChange={onChange}/>
            <button type="submit"   style={{margin:"10px" , display:"block",border:"1px solid rgb(158,158,153)"}}>Create Product</button>
        </form>
        {console.log("hiiiiiiiiiiii")}
        {console.log(product)}
    </div>

    
</>
  )
}


export default NewProduct;

