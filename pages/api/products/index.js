



import {createRouter} from "next-connect"
import dbConnect from "@/backend/config/dbConnect"
import {   getProducts, newProduct} from "@/backend/controllers/productControllers"
import { authorizedRoles, isAuthenticatedUser } from "@/backend/middlewares/auth";
import bodyParser from "body-parser";







const router = createRouter();


 dbConnect();
console.log("Nooooooooooooooooooooooo")
console.log("Nooooooooooooooooooooooo")
console.log("Nooooooooooooooooooooooo")
console.log("Nooooooooooooooooooooooo")
console.log("Nooooooooooooooooooooooo")


router.get(getProducts);
router.post(newProduct);



export default router.handler();