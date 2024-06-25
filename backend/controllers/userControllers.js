import { Router } from "react-router-dom";
import User from '../models/user'



export const getUsers = async (req,res,next) =>{

    const users = await User.find();
    res.status(200).json({

        users,
    });
};




export const updateUser = async (req,res,next) =>{
    console.log("Update______________________")
    let user = await User.findById(req.query.id);
    console.log("ZZZZZZZZZZZZZZZZZZZZZz")
    console.log(req.query.id)
    if(!user){
        res.status(404).json({
            error:"product not found",
        })
    }
    user = await User.findByIdAndUpdate(req.query.id, req.body);
    res.status(200).json({
        user,
    });
};
