


import { Header } from "@/Components/Header/Header";
import axios from "axios";
import { ListAllProducts } from "@/Components/products/ListAllProducts";
import product from "@/backend/models/product";
import { ListFilterProducts } from "@/Components/products/ListFilterProducts";
import { Header1 } from "@/Components/Header/Header1";

const getproducts = async () =>{
  const {data} = await axios.get(`${process.env.API_URL}/api/products`)
  console.log(data);
  return data
  
}



export default async function Home() {
  const productsData = await getproducts()


  

 

  

  return (
    <>
    <div   style={{backgroundColor :'rgb(233, 227, 227)'}}>
      <Header1/>
      <div className="container" style={{borderBottom : "1px solid gray",paddingTop:"20px",paddingBottom:"20px"}}>
      <h4 style={{padding : "20px 20px"}}>Laptops :</h4>

    
      <ListFilterProducts data={productsData}  category="Laptops"/>
      </div>
      </div>
      <div   style={{backgroundColor :'rgb(233, 227, 227)'}}>
     <div className="container" style={{borderBottom : "1px solid gray",paddingTop:"20px",paddingBottom:"20px"}}>

      <h4 style={{padding : "20px 20px"}}>Mobiles :</h4>
      <ListFilterProducts data={productsData}  category="Mobiles"/>
      </div>
      </div>
       <div   style={{backgroundColor :'rgb(233, 227, 227)'}}>
       <div className="container" style={{borderBottom : "1px solid gray",paddingTop:"20px",paddingBottom:"20px"}}>
      <h4 style={{padding : "20px 20px"}}>TV Screens :</h4>
      <ListFilterProducts data={productsData}  category="TvScreens"/>

     
      </div>
      </div> 
      </>
  );
}
