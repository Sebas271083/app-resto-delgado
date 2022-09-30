import React, { useState } from 'react'

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
    
    // const totalCart = () => {
    //     const total = productCartList.length
    //     console.log(productCartList)
    //     return total
    // }

    const totalCart = () => {
        if(!productCartList.length) {
            const sinProductos = "No hay productos agregados al carrito"
           return sinProductos
        } else {
            const total = productCartList.reduce((acc, prod) => acc + prod.quantity, 0);
            console.log(total)
            return total
        }

      };

      const totalPrecio = () => {
        if(!productCartList.length) {
           return 
        } else {
            const total = productCartList.reduce((acc, prod) => acc + prod.quantity * prod.price, 0);
            console.log("total", total)
            return total.toFixed(2)
        }

      };



    return(
        <CartContext.Provider value={{productCartList, addItem, removeItem, clear, isInCart, totalCart, totalPrecio, setProductCartList}}>
            {children}
        </CartContext.Provider>
    )
}