import React, { useEffect } from 'react'
import { useState } from 'react'
import Text from './Text'
import Box from './Box'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'


function Counter({
    product
}) {
    const {cart, setQuantity} = useContext(CartContext)
    const prodInCart = cart.find( ({prod}) => prod.id === product.id)
    const [counter, setCounter] = useState(
        prodInCart?.quantity ||    
        0
    );

    useEffect(() => {
      if (prodInCart && prodInCart.quantity !== counter) {
            setCounter(prodInCart.quantity)
      }
      if (!prodInCart && counter) {
            setCounter(0)
      }
    
    }, [cart])
    

    const increment = () => {
        setCounter(counter + 1)
        setQuantity(product, counter + 1)
    }
    const decrement = () => {
        setCounter(counter - 1)
        setQuantity(product, counter - 1)
    }


  return (
      <Box className="d-flex align-center">
          <button type="button" className="btn btn__primary" onClick={decrement} disabled={counter === 0}>-</button>
          <Text as="strong">{counter}</Text>
          <button type="button" className="btn btn__primary" onClick={increment}>+</button>
      </Box>
    )
  }
  
  export default Counter

