import { immerable } from "immer";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { Coffee } from "../pages/Home/components/CoffeeCard";
import { produce } from 'immer';

export interface CartItem extends Coffee{
    quantity: number;
}

interface CoffeeContextType{
    cartItems: CartItem[];
    cartQuantity: number;
    cardPriceTotal: number;
    addCoffee: (coffee: CartItem) => void;
    changeCartItemQuantity: (
        cartItemId: number,
        type: 'increase' | 'decrease') => void;
    deleteFromCart: (cartItemId: number) => void;
    cleanCart: () => void    
}

interface CoffeeContextProviderProps{
    children: ReactNode;
}

const COFFEE_ITENS_STORAGE_KEY = 'coffee-delivery:cartItems'

export const CoffeeContext = createContext({} as CoffeeContextType);

export function CoffeeContextProvider({ children }: CoffeeContextProviderProps){
    const [cartItems, setCartItems] = useState<CartItem[]>(() => {
        const storedCartItems = localStorage.getItem(COFFEE_ITENS_STORAGE_KEY)

        if(storedCartItems){
            return JSON.parse(storedCartItems)
        }
        return [];
    });
    const cartQuantity = cartItems.length
    const cardPriceTotal = cartItems.reduce((total, cartItem) => {
        return total + cartItem.price * cartItem.quantity;
    }, 0);


    

    function addCoffee(coffee: CartItem){
        const coffeeExistsInCart = cartItems.findIndex((cartItem) => cartItem.id === coffee.id);


        const newCart = produce(cartItems, (draft) => {
            if(coffeeExistsInCart < 0) {
            draft.push(coffee)

        } else{
            draft[coffeeExistsInCart]. quantity += coffee.quantity;
        }

        })

        setCartItems(newCart);
    }


    function changeCartItemQuantity(cartItemId: number, type: 'increase' | 'decrease'){
        const newCart = produce(cartItems, (draft) => {
            const coffeeExistsInCart = cartItems.findIndex(cartItem => cartItem.id === cartItemId);

            if(coffeeExistsInCart >= 0) {
                const item = draft[coffeeExistsInCart]
                draft[coffeeExistsInCart].quantity = type === 'increase' ? item.quantity + 1 : item.quantity - 1;
            }
        });

        setCartItems(newCart)
    }


    function deleteFromCart(cartItemId: number) {   
        const newCart = produce(cartItems, draft => {
            const coffeeExistsInCart = cartItems.findIndex(cartItem => cartItem.id === cartItemId);

            if(coffeeExistsInCart >= 0) {
                draft.splice(coffeeExistsInCart, 1)
            }
        })

        setCartItems(newCart);
    }

    function cleanCart(){
        setCartItems([])
    }


    useEffect(() => {
        localStorage.setItem(COFFEE_ITENS_STORAGE_KEY, JSON.stringify(cartItems));
    }, [cartItems])
        

    return(
        <CoffeeContext.Provider value={{
             cartItems, cartQuantity, cardPriceTotal, addCoffee, changeCartItemQuantity, deleteFromCart, cleanCart }}>
            {children}
        </CoffeeContext.Provider>
    )
}