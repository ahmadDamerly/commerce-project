
import multer from "multer";
// import ff  from '../../../../public/upload'

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null, '../../../../public/upload/');
    },
    filename: function(req, file, cb){
        cb(null, new Date().toISOString()+'-'+file.originalname);
    },
});
 
const fileFilter = (req, file, cb) =>{
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg')
        {
        cb(null, true);

    }else(
        {'error': 'Unsupported'},
        false
    );
};

 const upload = multer({
    dest:'./public/upload',

    // storage,
    // limits: {fileSize:1024*1024},
    // fileFilter,
});

















// import upload from "@/backend/utils/multer"
// import uploadMiddleware from"@/backend/utils/multer"

import { uploadProductImages } from "@/backend/controllers/productControllers"
import dbConnect from "@/backend/config/dbConnect"
import {createRouter} from "next-connect"
import bodyParser from "body-parser";
// import multer from "multer"

const router = createRouter()

dbConnect();

export const config = {
    api: {
        bodyParser : false,

    },
};


console.log("**********before************")


console.log("**********before************")

// const uploadMiddleware = upload.array('image');
// console.log(image)
const uploadMiddleware = upload.array('image');
router.use(uploadMiddleware).post(uploadProductImages);
console.log("~~~~~~~~~~~~~~~~~~")
export default router.handler();