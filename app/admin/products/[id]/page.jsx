'use client'

import axios from 'axios'
import { useParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'








const   updatePage =  () => {
    const router = useRouter()
    const {id} = useParams() ;
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
    
    const updateProduct = async(product) =>{
        try {
            {console.log("PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP")}
            {console.log(id)}

            const{data} = await axios.put(
                `${process.env.API_URL}/api/products/${id}`,
                product
            );
        
           
        } catch (error) {
            
        }
    }

    const submitHandler = (e) =>{
        e.preventDefault();

        updateProduct(product);
        router.push('/admin')

        
    }








    const categories = [
        "Laptops",
        "Mobiles",
        "TvScreens",
    ];



    // const router = useRouter();







  return (
    <>



    <div className='First' style={{display : "flex " , width:"50%",flexWrap:"wrap"}}>
    <h1 style={{margin:"20px",color:"red"}}>Update product :</h1>

        <form onSubmit={submitHandler}>
            <input type="text" placeholder='Name' style={{width :"100%",margin:"10px"}} name="name" value={name} onChange={onChange}/>
            <input type="text" placeholder='Description' style={{width :"100%",margin:"10px"}}name="description" value={description} onChange={onChange} />
            <input type="text" placeholder='Price' style={{width :"100%",margin:"10px"}} name="price" value={price} onChange={onChange}/>
            <input type="text" placeholder='Category' style={{width :"100%",margin:"10px"}}name="category" value={category} onChange={onChange}/>
            <input type="text" placeholder='Seller/Brand' style={{width :"100%",margin:"10px"}} name="seller" value={seller} onChange={onChange}/>
            <input type="text" placeholder='Stock' style={{width :"100%",margin:"10px"}} name="stock" value={stock} onChange={onChange}/>
            <button type="submit"   style={{margin:"10px"}}>Update Product</button>
        </form>
    </div>

    


    </>
  )
}

export default updatePage;