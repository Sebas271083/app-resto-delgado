import React, { useState } from 'react'
import Contador from '../components/Contador/Contador';

export const CartContext = React.createContext(); 

export const CartProvider = ({children}) => {

    const [productCartList, setProductCartList] = useState([])

    const addItem = (item, quantity) => {


        console.log("item", item, "quantity", quantity)
        const newProduct = {
            ...item,
            quantity
        }

        const newArray = productCartList.some( product => product.id === newProduct.id)
        console.log(newArray)
        if(!newArray) {
            console.log(newProduct);
            const newArreglo = [...productCartList];
            newArreglo.push(newProduct);
            console.log(newArreglo)
            setProductCartList(newArreglo);    
        } else {
           const carritoActualizado = productCartList.map(product => {
            if ( product.id === newProduct.id ) {
                product.quantity = newProduct.quantity;
                }
                return product
           })
           setProductCartList(carritoActualizado)
        }

        
    }


    const removeItem = (itemId) => {
        console.log(itemId)
        const newArreglo = productCartList.filter(product => product.id !== itemId);
        setProductCartList(newArreglo)
    }

    const clear = () => {
        setProductCartList([])
    }

    const isInCart = (itemId, quantity) => {
        const newArray = productCartList.some( product => product.id === itemId)
 
            console.log(newArray)
        }
    

    return(
        <CartContext.Provider value={{productCartList, addItem, removeItem, clear, isInCart}}>
            {children}
        </CartContext.Provider>
    )
}