

import { DeleteProduct } from '@/Components/products/DeleteProduct'
import NewProduct from '@/Components/products/NewProduct'
import axios from 'axios'
import React from 'react'








const   adminPage = async () => {
   
 



 

    const allProducts = async() =>{
        try {
            const {data} = await axios.get(
                `${process.env.API_URL}/api/products`     
            );
            console.log("^^^^^^^^^^^^^^^^^^^^^^^^")

            console.log(data)

            return data
                
        } catch (error) {
            
        }
      }
    
      const allUsers = async() =>{
        try {
            const {data} = await axios.get(
                `${process.env.API_URL}/api/users`     
            );
            console.log("OOOOOOOOOOOOOOOOOOOOOOO")

            console.log(data)

            return data
                
        } catch (error) {
            
        }
      }
      
      
      const res =await allProducts();
      console.log("VVVVVVVVVVVVVVVVVV")
      console.log(res)
    
      const res1 =await allUsers();
      console.log("WWWWWWWWWWWWWWWWWWWWWWW")
      console.log(res1)
   


    const categories = [
        "Laptops",
        "Mobiles",
        "TvScreens",
    ];




  

   

    const mylink = "/admin/products/" ;
    const mylink1 ="/admin/products/upload_images/" ;
    const mylink2 = "/admin/users/" ;



  return (
    <>

    <NewProduct/>

    
 
   

    
   
    <div>
        <h4 style={{margin:"20px",color:"rgb(148,7,7)"}}>All Products :</h4>
        <div style={{marginLeft:"50px"}}>
        <table>
            <tbody >
        {res?.products?.map((product)=>(
    
             <tr key={product._id} >
                <td >{product?.name }</td>
                <td> <a href={mylink1 + product._id} style={{textDecoration:"none",marginRight:"20px",marginLeft:"20px"}}>Upload Images</a> </td>

                      <td> <a href={mylink + product._id} style={{textDecoration:"none",marginRight:"20px"}}>Update</a> </td> 
                    <td><DeleteProduct id={product._id}/></td>                        
             </tr>
        ))}
        </tbody>
        </table>
        </div>
    </div>
    <div>
        <h4  style={{margin:"20px",color:"rgb(148,7,7)"}} >All Users :</h4>
        <div style={{marginLeft:"50px"}}>
        <table>
            <tbody >

        {res1?.users?.map((user)=>(
    
             <tr key={user._id} >
                <td style={{paddingRight:"50px"}} >{user?.name }</td>

                      <td> <a href={mylink2 + user._id} style={{textDecoration:"none",marginRight:"20px"}}>Update</a> </td> 
             </tr>
        ))}
        </tbody>
        </table>
        </div>
    </div>
    </>
  )
}

export default adminPage;