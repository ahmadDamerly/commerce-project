import {createRouter} from "next-connect"
import dbConnect from "@/backend/config/dbConnect"
import {   deleteProduct, getProduct, updateProduct} from "@/backend/controllers/productControllers"
import bodyParser from "body-parser";
import { authorizedRoles, isAuthenticatedUser } from "@/backend/middlewares/auth";





const router = createRouter()
 dbConnect();

 console.log("Nooooooooooooooooooooooo")
 console.log("Nooooooooooooooooooooooo")
 console.log("Nooooooooooooooooooooooo")
 console.log("Nooooooooooooooooooooooo")
 console.log("Nooooooooooooooooooooooo")


router.get(getProduct);
router.put(updateProduct);
router.delete(deleteProduct);

export default router.handler();