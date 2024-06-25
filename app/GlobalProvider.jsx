import { CartProvider } from "@/context/CartContext"
import { SessionProvider } from "next-auth/react"
 

export function GlobalProvider({children}) {
    return
    // <SessionProvider>
    {/* <CartProvider> */}
        {children}
    {/* </CartProvider> */}
    // </SessionProvider>
}