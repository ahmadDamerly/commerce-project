'use client'
import { useRouter } from "next/navigation"
import { createContext , useState, useEffect} from "react"

const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const router = useRouter();

    useEffect(() => {
        setCartToState()
    }, [])

    const setCartToState = () => {
        setCart(
            localStorage.getItem('cart')
            ? JSON.parse(localStorage.getItem('cart'))
            : []
        )
    }


    const addItemToCart = async ({
        product,
        name,
        price,
        image,
        stock,
        seller,
        quantity = 1,
    }) => {
        const item = {
            product,
            name,
            price,
            image,
            stock,
            seller,
            quantity,
        };

        const isItemExist = cart?.cartItems?.find(
            (i) => i.product === item.product
        )



        let newCartItems;
        if(isItemExist){
            newCartItems = cart?.cartItems?.map((i) => 
                i.product === isItemExist.product ? {...item,quantity:i.quantity+1} : i
                // i.product === isItemExist.product ? item : i
            );

        } else{
             console.log("9999999999999999999999999")
             console.log(cart)
            if (cart.length==0) { newCartItems = [item] }
            else{
               newCartItems =[...cart?.cartItems , item] }
        }



        localStorage.setItem("cart" , JSON.stringify({cartItems: newCartItems}))

        console.log("XXXXXXXXXXXXXXXXXXXXXXXX")
        console.log(newCartItems)

        setCartToState();

        console.log("YYYYYYYYYYYYYYYYYYYYYYYY")
        console.log(cart)
    };


    const removeItemFromCart = async ({
        product,
        name,
        price,
        image,
        stock,
        seller,
        quantity,
    }) => {
        const item = {
            product,
            name,
            price,
            image,
            stock,
            seller,
            quantity,
        };

        const isItemExist = cart?.cartItems?.find(
            (i) => i.product === item.product
        )



        let newCartItems;
        if(isItemExist){
            newCartItems = cart?.cartItems?.map((i) => 
                i.product === isItemExist.product ? {...item,quantity:i.quantity-1} : i
                // i.product === isItemExist.product ? item : i
            );

        } 



        localStorage.setItem("cart" , JSON.stringify({cartItems: newCartItems}))

        console.log("XXXXXXXXXXXXXXXXXXXXXXXX")
        console.log(newCartItems)

        setCartToState();

        console.log("YYYYYYYYYYYYYYYYYYYYYYYY")
        console.log(cart)
    };






    return(
        <CartContext.Provider
        value={{
            cart,
            addItemToCart,
            removeItemFromCart,

        }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartContext;