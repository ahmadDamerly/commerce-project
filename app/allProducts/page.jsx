'use client'


import { Header } from "@/Components/Header/Header";
import axios from "axios";
import { ListAllProducts } from "@/Components/products/ListAllProducts";
import { Header1 } from "@/Components/Header/Header1";

const getproducts = async () =>{
  console.log(process.env.API_URL)
  const {data} = await axios.get(`${process.env.API_URL}/api/products`)
  console.log(data);
  return data
  
}



export default async function Home() {
  const productsData = await getproducts()



  

  return (
    <div   style={{backgroundColor :'rgb(233, 227, 227)'}}>
            <Header1/>

    <div className="container">
    <h2 style={{padding : "30px 0px"}}>All Products</h2>

    
      <ListAllProducts data={productsData}/>
 
     
        </div>
      </div> 
  );
}
