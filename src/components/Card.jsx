
import React from 'react'
import Box from './Box'
import Text from './Text'
import Counter from './Counter'

function Card({
    img,
    name,
    shortsDescription,
    amount,
    largeDescription,
    ...props
}) {
    return (
        <Box className="card"> 
            <img src={img} alt={name }/>
            <Box className="m4">
                <Text as="h3">{name}</Text>
                <Text>{shortsDescription}</Text>
                <Text>{largeDescription} </Text>
                <Box className="d-flex justify-center">
                    <Counter
                        product={{
                            img,
                            name,
                            shortsDescription,
                            amount,
                            largeDescription,
                            ...props
                        }}
                        />
                </Box>
                <hr />
                <Box className="d-flex w-100 justify-end">
                    <Text as='b'>{`$ ${amount}`} </Text>
                </Box>
            </Box>
        </Box>


    )
}

export default Card