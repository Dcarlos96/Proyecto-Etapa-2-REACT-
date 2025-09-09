import Box from "./Box"
import Text from "./Text"


function Form({
    inputsArray,
    values,
    errors,
    onChange,
    onSubmit,
}) {
  return (
    <form onSubmit={onSubmit} className="form__container">
        {
            inputsArray.map(
                ({name, label, type}) => 
                    <Box key={name} className={`form__input-group${type === "checkbox" ? " d-flex align-center " : ""}`}>
                        <Text as='label' className="form__label" htmlFor={name} >{label} </Text>
                        <input 
                        id={name} 
                        name={name} 
                        type={type} 
                        value={type !== "file" ? values [name] : values[name].filename} 
                        onChange={onChange} 
                        className={`form__input ${ errors[name] ? "with-error" : ""}`}/>
                        {errors[name] && <Text as="span" className="form__error">{errors[name]} </Text>}
                    </Box>
            )
        }
        <button type="submit" className="form__submit btn btn__primary">Enviar</button>
    </form>
  )
}

export default Form
                
