




import {withAuth} from "next-auth/middleware";
import { redirect } from "next/dist/server/api-utils";
import { NextResponse } from "next/server";
import { Alert } from "./Components/Alert";

export default withAuth(
    async function middleware(req) {
        const url = req.nextUrl.pathname;
        const userRole = req?.nextauth?.token?.user?.role;

        if(url.startsWith('api')) {
            NextResponse.next().headers.append("Access-Control-Allow-Origin", "*");
        }

        if(url?.startsWith("/admin") && userRole !=="admin") {
            <Alert/>
            return NextResponse.redirect(new URL("/notAllowed",req.url));
        }
    },
    {
        callbacks: {
            authorized: ({ token }) => {
                if (!token) {
                   return new Error("wrong");
                }
            },
        },
    }
);


export const config = {
    matcher: ["/admin/:path*"],
};
