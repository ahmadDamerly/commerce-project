import { Router } from "react-router-dom";
import Product from "../models/product";
import { cloudinary, uploads } from "../utils/cloudinary";
import fs from 'fs'
import APIFilters from "../utils/APIFilters";








export const newProduct = async (req,res,next) =>{

    console.log("*************new22**********")
    console.log(req.body)
    const product = await Product.create(
        req.body);
    res.status(200).json({
        product,
    })
}

// export const getProducts = async (req,res,next) =>{

//     const products = await Product.find();
//     res.status(200).json({

//         products,
//     });
// };


export const getProducts = async (req,res,next) =>{

    const apiFilters = new APIFilters(Product.find(), req.query)
    .search();

    const products = await apiFilters.query;

    res.status(200).json({

        products,
    });
};



export const getProduct = async (req,res,next) =>{

    const product = await Product.findById(req.query.id);
    if(!product){
        res.status(404).json({
            error:"product not found",
        })
    }
    res.status(200).json({
        product,
    });
};



export const updateProduct = async (req,res,next) =>{
    console.log("Update______________________")
    let product = await Product.findById(req.query.id);
    console.log("ZZZZZZZZZZZZZZZZZZZZZz")
    console.log(req.query.id)
    if(!product){
        res.status(404).json({
            error:"product not found",
        })
    }
    product = await Product.findByIdAndUpdate(req.query.id, req.body);
    res.status(200).json({
        product,
    });
};



export const deleteProduct = async (req,res,next) =>{
    console.log("YES..........................")
    console.log("YES..........................")
    console.log("YES..........................")
    console.log("YES..........................")
    console.log("YES..........................")

    console.log(req.query.id)
    let product = await Product.findById(req.query.id);
    console.log(product);
    if(!product){
        res.status(404).json({
            error:"product not found",
        })
    }

    // for(let i=0; i<product.images.length; i++){
    //     const res = await cloudinary.v2.uploader.destroy(product.images[i]._id)
    // }

    await product.deleteOne();
    res.status(200).json({
        success:true,
    });
};

export const uploadProductImages = async (req,res,next) => {
    console.log("************after****************")
    let product = await Product.findById(req.query.id);
    console.log("1010101010101010101010101010")
    console.log(req.query.id)

    if(!product) {
        res.status(404).json({
            error:"product not found",
        });
    }
    

    const uploader = async (path) => await uploads(path,"pro/products")

    const urls = []
    const files =   req.files;
    console.log("********22222*********")
    console.log(req.files)
    for(const file of files) {
        const {path} = file;
        console.log("555555555555555555555")
        console.log(path)
        const imgUrl = await uploader(path)
        urls.push(imgUrl)
        fs.unlinkSync(path)
    }
    product = await Product.findByIdAndUpdate(req.query.id,{
        images: urls
    })
    res.status(200).json({
        data:urls,
        product,
    })
}


