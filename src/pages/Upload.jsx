
import { useState } from 'react'
import Container from '../components/Container'
import Form from '../components/Form'
import Text from '../components/Text'
import { useForm } from '../hooks/useForm'
import { postProducts } from '../utils/api'

const validationsUpload ={
    name:{
        validation: value => value.length > 3,
        errorText: "El nombre del juguete debe tener mas de 3 letras"
    },
    amount:{
        validation: value => value.length > 0,
        errorText: "El precio debe ser mayor a 0"
    },
    stock:{
        validation: value => value.length > 0,
        errorText: "El stock debe ser mayor a 0"
    },
    brand:{
        validation: value => value.length > 3,
        errorText: "El marca es obligatorio"
    },
    category:{
        validation: value => value.length > 3,
        errorText: "Debe tener mas de 3 letras"
    },
    
}

function Upload() {

    const {values, onChange, errors, resetForm} = useForm ({
        name: "",
        amount: 0,
        stock: 0,
        brand: "",
        category: "",
        shortsDescription:"",
        largeDescription:"",
        freeDelivery:false,
        ageFrom: 0,
        ageTo: 0,
        img:""
    }, validationsUpload)

    const handleSutmit = e => {
          e.preventDefault()
          if (Object.values(errors).every( val => !val)) {
              postProducts(values)
                  .then(() => alert("Producto cargado"))
                  .then(() => resetForm())
                  .catch(err => console.error(err))
                } else {
                  console.log("Formulario incorrecto ")
                }
        }

    return (
        <Container as="main" className="m-t pad">
            <Text as="h2">Carga de Productos</Text>
                <Form 
                    values={values}
                    errors={errors}
                    onChange={onChange}
                    onSubmit={handleSutmit}
                    inputsArray={[
                        {
                            name:"name",
                            type:"text",
                            label:"Nombre"
                        },
                        {
                            name:"amount",
                            type:"number",
                            label:"Precio"
                        },
                        {
                            name:"stock",
                            type:"number",
                            label:"Stock"
                        },
                        {
                            name:"brand",
                            type:"text",
                            label:"Marca"
                        },
                        {
                            name:"category",
                            type:"text",
                            label:"Categoria"
                        },
                        {
                            name:"shortsDescription",
                            type:"text",
                            label:"Descripcion corta"
                        },
                        {
                            name:"largeDescription",
                            type:"textarea",
                            label:"Descripcion larga"
                        },
                        {
                            name:"freeDelivery",
                            type:"checkbox",
                            label:"Envio gratis"
                        },
                        {
                            name:"ageFrom",
                            type:"number",
                            label:"Edad desde"
                        },
                        {
                            name:"ageTo",
                            type:"number",
                            label:"Edad hasta"
                        },
                        {
                            name:"img",
                            type:"file",
                            label:" URL de la Imagen"
                        },
                    ]}
                />
        </Container>
    )
}

export default Upload