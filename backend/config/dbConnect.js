




import mongoose from "mongoose";

const dbConnect = async () => {
  // mongoose.set("strictQuery",false);

  try {
   await  mongoose.connect(process.env.MONGODB_URI,
    // {
    //   dbName:"commerce"
    // }

   );
   console.log("Connnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnected")

  } catch (error) {
    process.exit(1);
  }
  

}

export default dbConnect;