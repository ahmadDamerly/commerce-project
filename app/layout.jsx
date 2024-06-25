'use client'

import { SessionProvider } from "next-auth/react";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import { CartProvider } from "@/context/CartContext";
import { GlobalProvider } from "./GlobalProvider";


// export const metadata = {
//   title: "e-commerce",
//   description: "e-commerce",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head/>
       <body>
       {/* <GlobalProvider> */}
       <CartProvider>
       <SessionProvider>

      {children}

      </SessionProvider>
      </CartProvider>
        
      {/* </GlobalProvider> */}
      </body>
    </html>
  );
}
