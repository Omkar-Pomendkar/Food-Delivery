import { createContext } from "react";
import { food_list } from "../assets/assets";


export const StoreContext = createContext (null)


const StoreContextProvider = (props) =>
{


    const contextValue = {
        // Here we are mounting food List
        food_list

    }

    

    return(

        <StoreContext.Provider value = {contextValue}>
            
            {props.children}
        </StoreContext.Provider>
    )
}  

export default StoreContextProvider
