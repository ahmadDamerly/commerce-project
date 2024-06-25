import mongoose from "mongoose"
import bcrypt from 'bcryptjs'

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true,'please enter your name']
    },
    email: {
        type: String,
        required: [true, 'please enter your email'],
        unique: true
    },
    password:{ 
        type: String,
        required: [true,'please enter your password'],
        minLength: [6, 'your password should be longer than 6'],
        select: false
    },
    avatar: {
        public_id: String,
        url: String
    },
    role: {
        type: String,
        default: "user",
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

userSchema.pre("save", async function(next){
    if (!this.isModified("password")) {
       return next();
    }
    else{
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt) }
})








export default mongoose.models.User || mongoose.model("User",userSchema);