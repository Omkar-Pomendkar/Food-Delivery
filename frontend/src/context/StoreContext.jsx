import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";


export const StoreContext = createContext (null)


const StoreContextProvider = (props) =>
{


    const [cartItems,setCartItems] = useState({});

    // Functionality for add to cart and remove to cart

    const addToCart = (itemId) => {
        // if user is adding first time entry in the Cart
        // If Cart Items id is not Available and adding 1 item
        if(!cartItems[itemId]) {
            setCartItems((prev) => ({...prev,[itemId]:1}))
        }
        // If user is adding more than one item
        else {
            setCartItems((prev) => ({...prev,[itemId]:prev[itemId]+1}))
        }
    }

    const removeFromCart = (itemId) => {
    //  It will decrease the value by One
    setCartItems((prev) => ({...prev,[itemId]:prev[itemId]-1}))   

    }

    useEffect(()=>{
        console.log(cartItems)
    },[cartItems])


    const contextValue = {
        // Here we are mounting food List
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart

    }

    

    return(

        <StoreContext.Provider value = {contextValue}>
            
            {props.children}
        </StoreContext.Provider>
    )
}  

export default StoreContextProvider
