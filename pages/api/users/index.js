



import {createRouter} from "next-connect"
import dbConnect from "@/backend/config/dbConnect"
import {   getUsers} from "@/backend/controllers/userControllers"





const router = createRouter();


 dbConnect();
console.log("Nooooooooooooooooooooooo")



router.get(getUsers);



export default router.handler();