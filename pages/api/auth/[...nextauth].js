import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import User from "@/backend/models/user"
import bcrypt from "bcryptjs"
import dbConnect from "@/backend/config/dbConnect"

export default async function auth(req, res) {
    return await NextAuth(req , res ,{
    session: {
        strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
            async authorize(credentials, req) {
                
                    
              
                dbConnect;
                const { email, password} = credentials;
                console.log ("here i am ........")
                console.log(email)
                console.log(password)
                console.log("#######################")

                const user = await User.findOne({email}).select("+password");
                console.log(user.name)
                console.log("#######################")

                if(!user) {
                    throw new Error("invalid Email or Password")
                }

                const isPasswordMatched = await bcrypt.compare(
                    password,
                    user.password
                )
                console.log(isPasswordMatched)

                if(!isPasswordMatched){
                    throw new Error("invalid email or password")
                }
                console.log("*****************")
                console.log(user)

                return user;

            },
        }),
    ],
    callbacks: {
        jwt: async ({token , user}) =>{
            user && (token.user = user);
            console.log("::::::::::::::")
            console.log(token)

            return token;
        },
        session: async ({ session, token}) => {
            session.user = token.user;
            delete session?.user?.password;
            console.log("|||||||||||")
            console.log(session)

            return session;
        },
    },
    pages : {
        signIn: "/login",
    },
    secret: process.env.NEXTAUTH_SECRET,
});
}