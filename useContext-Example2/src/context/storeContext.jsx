import { createContext, useState, useEffect } from "react";

/* It creates a context object. */
export const StoreContext = createContext();

export default function StoreContextProvider({ children }) {

    /* Creating a state variable called items and a function called SetItems. */
    const [items, SetItems] = useState([]);

    /* Creating a state variable called cartItems and a function called SetCartItems. */
    const [cartItems, SetCartItems] = useState([])

    /**
     * It loads the items from the items.json file and sets the state of the items.
     */
    const LoadItems = async () => {
        let res = await fetch('./data/items.json');
        let data = await res.json();
        SetItems(data);
    }

    /* A hook that is called when the component is mounted. */
    useEffect(() => {
        LoadItems();
    }, []);

    const value = {
        items,
        cartItems,
        SetCartItems
    }

    return (
        <StoreContext.Provider value={value}>
            {children}
        </StoreContext.Provider>
    )

}