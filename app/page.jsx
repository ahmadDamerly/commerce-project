

import { Header } from "@/Components/Header/Header";
import axios from "axios";
import { ListProducts } from "@/Components/products/ListProducts";

import queryString from "query-string";


const getproducts = async (searchParams) =>{
  console.log("0000000000000000000000000")
  console.log(searchParams)

  const urlParams ={
    keyword: searchParams.searchParams.keyword,
  };
  console.log(urlParams)


  const searchQuery = queryString.stringify(urlParams);
  console.log(searchQuery)




  const {data} = await axios.get(`${process.env.API_URL}/api/products?${searchQuery}`);
  // const {data} = await axios.get(`${process.env.API_URL}/api/products`);

  console.log(data);
  return data;
  
};



export default async function Home(searchParams) {
  const productsData = await getproducts(searchParams)



  

  return (
    <>
      <Header/>
      <ListProducts data={productsData}/>
 
     

      </> 
  );
}
