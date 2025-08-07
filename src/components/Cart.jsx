import { useContext } from "react"
import Box from "./Box"
import Text from "./Text"
import { CartContext } from "../context/CartContext"

import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import Modal from "./Modal";
import Counter from "./Counter";
import Button from "./Button";




function Cart() {

const { cart, totalQuantity, resetCart} = useContext(CartContext)
const [showModal, setShowModal] = useState(false)

const totalAmount = cart.reduce( (acc, item) => acc + item.prod.amount * item.quantity, 0)

  return (
    <>
        <Box className="cart__container" role="button" onClick={() => setShowModal(true)}>
            <FaShoppingCart size="1.5em" />
            <Box className="cart__badge">
                <Text as="span">{totalQuantity}</Text>
            </Box>
        </Box>
            <Modal show={showModal} closeModal={() => setShowModal(false)}>
                <Text as="h3">Productos seleccionados</Text>
                {
                    cart.map(
                        ({prod, quantity}) =>
                            <Box key={prod.id} className="d-flex align-center space-between">
                                <Text as="h4">{prod.name} </Text>
                                <Text as="spam">{quantity} </Text>
                                <Text as="b">{`$ ${prod.amount * quantity}`} </Text>
                                <Counter product={prod} />
                            </Box>
                    )
                }
                            <Box className="d-flex align-center space-between">
                                <Text as="h4">Total: </Text>
                                <Text as="b">{`$ ${totalAmount}`} </Text>
                            </Box>
                            <Box>
                                <Button
                                    label="Finalizar"
                                    onClick={() => {
                                    alert("Felicitaciones, tu pedido se cargó correctamente.");
                                    resetCart(); 
                                    }}
                                />
                            </Box>
            </Modal>
    </>
  )
}

export default Cart