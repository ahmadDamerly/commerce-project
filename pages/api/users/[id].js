import {createRouter} from "next-connect"
import dbConnect from "@/backend/config/dbConnect"
import {  updateUser} from "@/backend/controllers/userControllers"




const router = createRouter()
 dbConnect();

 console.log("Nooooooooooooooooooooooo")


router.put(updateUser);

export default router.handler();