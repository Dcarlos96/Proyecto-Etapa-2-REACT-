import Container from "../components/Container"
import Form from "../components/Form"
import Text from "../components/Text"
import { useForm } from "../hooks/useForm"
import { postContact } from "../utils/api"

const inputsValidations = {
  name: {
      validation: value => value.length > 2,
      errorText: "El nombre es incorrecto"
  },
  email:
      {validation: value => {
        const regexp = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
        return regexp.test(value);
      },
      errorText:"El mail no tiene el formato correcto"
  },
  subject:
      {validation: value => value.length > 0,
      errorText: "El asunto es obligatorio}"
  } ,
  message:
      {validation: value => value.length > 0,
      errorText: "Ingrese un texto}"
  } ,
}
    
function ContactUs() {

    const {values, onChange, errors} = useForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    }, inputsValidations) 

    const handleSutmit = e => {
      e.preventDefault()
      if (Object.values(errors).every( val => !val)) {
          postContact(values)
              .then(() => alert("mensaje enviado"))
              .catch(err => console.error(err))
            } else {
              console.log("Formulario incorrecto ")
            }
    }
        


    return (
          <Container as="main" className="m-t pad">
              <Text as="h2">Contactanos</Text>
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
                    name:"email",
                    type:"email",
                    label:"e-Mail"
                  },
                  {
                    name:"subject",
                    type:"text",
                    label:"Asunto"
                  },
                  {
                    name:"message",
                    type:"text",
                    label:"Mensaje"
                  },
                ]}
              />
          </Container>
    )
}

export default ContactUs