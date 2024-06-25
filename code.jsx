// 'use client'


// import bodyParser from "body-parser";
// import { getServerSession } from "next-auth";
// import { getSession } from "next-auth/react";
// import { useRef } from "react";



// // export const config = {
// //     api: {
// //         bodyParser: false
// //     }
// // };


// const session1 ="";




// const isAuthenticatedUser = async (req,res,next) => {
//     const session1 = await getSession({req});

//     console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>hellos");
//     console.log(">>>>>>>>>>>>>>>>>>>>>>0404040404040404040404040404040404Hello");

    
//     console.log(session1);
//     console.log(req.body);
//     console.log(req.user);

    
//     console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>wooooooooooo");
//     console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>wooooooooooo");



//     console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>nooooooooooo");
//     console.log(session1);

//     if(!session1) {
//         console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>NO");

//         // return next(new Error("wrong"));
//         res.status(401).json({error:"unauth"});
//         return;

//     }
//     console.log(">>>>>>>>>>>>>>>>>>>>>>03030303030303030303030303030303");
//     console.log(req.body);
//     console.log(req.user);

//     req.user = session1.user;
//     console.log(req.user);

//     console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>welcome11");
//     console.log(req.user);
//     console.log(req.body);
//     console.log(session1);


//     next();
//     console.log(">>>>>>>>>>>>>>hello");
//     console.log(session1);

// };

// const authorizedRoles =  (...roles) => {
//     console.log("_______________________________YOU________");
//     return (req, res, next) => {
//         if(!roles.includes(req.user.role)) {
//             // return next (new Error("wrong") );
//             res.status(401).json({error:"unauth"});
//             console.log("00000000000000000000/11111111111111");
//             console.log(roles.includes(req.user.role));

//             return;
//         }
//         console.log(session1);
//     console.log("____________________________________YES/NO___________");
//     console.log("____________________________________YES/NO___________");

//     console.log(session1);

//         next();
//         console.log("____________________________________YES/NO___________");

//     };
// };

// export {isAuthenticatedUser,authorizedRoles};















// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     experimental:{
//         appDir: true,
//     },
//     env: {
//         API_URL: 'https://commerce-gip96t2en-ahmaddamerlys-projects.vercel.app',
            // API_URL: 'https://pro.vercel.app',
//         API_URL: 'http://localhost:3000',
//         DB_URI : "mongodb://127.0.0.1:27017/pro",
//         DB_URI:"mongodb+srv://ahmad:ahmad@cluster0.z3jzp4a.mongodb.net/commerce?retryWrites=true&w=majority&appName=cluster0",
//         NEXTAUTH_SECRET:"codingwithahmad",
//             CLOUD_NAME:"dnn2qyu1r",
//             CLOUDINARY_API_KEY:"476899495917671",
//             CLOUDINARY_API_SECRET:"prnrcwR5JB4Kcc2YNUIxHq603SE",
                // NEXTAUTH_URL : "https://pro.vercel.app",


           
//     }
// };

// export default nextConfig;









// import { Header } from "@/Components/Header/Header";
// import axios from "axios";
// import { ListProducts } from "@/Components/products/ListProducts";

// import queryString from "query-string";


// const getproducts = async (searchParams) =>{
//   console.log("0000000000000000000000000")
//   console.log(searchParams)

//   const urlParams ={
//     keyword: searchParams.searchParams.keyword,
//   };
//   console.log(urlParams)


//   const searchQuery = queryString.stringify(urlParams);
//   console.log(searchQuery)




//   const {data} = await axios.get(`${process.env.API_URL}/api/products?${searchQuery}`);
//   // const {data} = await axios.get(`${process.env.API_URL}/api/products`);

//   console.log(data);
//   return data;
  
// };



// export default async function Home(searchParams) {
//     const productsData = await getproducts(searchParams)
  
  
  
    
  
//     return (
//       <>
//         <Header/>
//         <ListProducts data={productsData}/>
//       <div>
//         good
//       </div>
       
  
//         </> 
//     );
//   }
  