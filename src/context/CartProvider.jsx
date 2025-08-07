import React from 'react'
import { CartContext } from './CartContext'
import { useState } from 'react'

function CartProvider({children}) {
  
  const [cart, setCart] = useState([]);
  
  const setQuantity = (product, quantity) =>{
    
    if (!quantity) {
      setCart(
        cart.filter(
          (itemCart) =>
            itemCart.prod.id !== product. id

        )
      )
    } else {
      const foundProduct = cart.find(({ prod }) => prod.id === product.id ) // aca lo estamos buscando si hay un producto con el mismo id
        if (!foundProduct) {
          setCart([
            ...cart,
            {
              prod: product,
              quantity
            }
          ])
        }else {
          setCart(
            cart.map(
              ( itemCart ) =>
                itemCart.prod.id === product. id ?
                  {prod: product, quantity}
                  :
                  itemCart
            )
          )
        }
    }

  }
  
  const totalQuantity = cart.reduce((acc, currentProd) => acc + currentProd.quantity, 0)

  const resetCart = () => setCart([])
  
  return (
    <CartContext.Provider value={{
        cart,
        setQuantity,
        totalQuantity,
        resetCart
    }}> {children} </CartContext.Provider>
  )
}

export default CartProvider