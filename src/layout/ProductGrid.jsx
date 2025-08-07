import  { useEffect, useState } from 'react'
import Card from '../components/Card'
import Box from '../components/Box'
import { getProducts } from '../utils/api'

function ProductGrid() {
    const [products, setProducts] = useState ([]);

    useEffect(() => {
    getProducts()
        .then(data => {
        console.log("Respuesta de getProducts:", data);
        setProducts(Array.isArray(data) ? data : []);
        })
        .catch(err => {
        console.error("Error al obtener productos:", err);
        setProducts([]); // para evitar que sea undefined
        });
}, []);
    

  return (
        <Box className="grid">
            {Array.isArray(products) && products.map(prod => (
                <Box key={prod.id} className="col-xs-12 col-sm-6 col-lg-4 col-xl-3 d-flex">
                    <Card {...prod} />
                </Box>
))}
        </Box>


  )
}

export default ProductGrid