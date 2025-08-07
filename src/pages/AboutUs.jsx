import React from 'react'
import Container from '../components/Container'
import Text from '../components/Text'
import Box from '../components/Box'

function AboutUs() {
  return (
        <Container as="main" className="m-t pad">
            <Text as="h2">Sobre Nosotros</Text>
            <Box>
              <Text as="h3">
                Conoce mas sobre nosotros
              </Text>
              <Text as="p">
                Los juguetes son objetos diseñados para el entretenimiento, el aprendizaje y el desarrollo de habilidades, principalmente en niños, pero también pueden ser utilizados por animales. Jugar con juguetes ayuda a los niños a desarrollar habilidades cognitivas, físicas, emocionales y sociales. Además, los juguetes pueden ser herramientas para la expresión creativa y la exploración del mundo. 
                Tipos de juguetes y sus beneficios:
                Juguetes cognitivos:
                Rompecabezas, juegos de mesa, bloques de construcción. Ayudan con la atención, razonamiento, memoria y habilidades motoras. 
                Juguetes físicos:
                Pelotas, bicicletas, juguetes para trepar. Fomentan la coordinación, el equilibrio y las habilidades motoras gruesas y finas. 
                Juguetes emocionales:
                Muñecas, animales de peluche. Permiten a los niños explorar y expresar emociones, desarrollar empatía y regular sus sentimientos. 
                Juguetes sociales:
                Juegos de roles, juguetes para compartir. Ayudan a aprender a socializar, a colaborar, a negociar y a resolver conflictos. 
                Juguetes creativos:
                Materiales de arte, instrumentos musicales. Estimulan la imaginación, la creatividad y la expresión artística. 
              </Text>
              <Box>
                <div>
                  <img src='https://www.ellitoral.com/images/2024/08/13/zrKI244iD_1300x655__1.jpg' alt='imagen de la jugueteria' className='img'/>
                  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_t6SX0hj9n7rIVsO-JtKhbZXQmhh1d4YxYg&s' alt='imagen de la jugueteria' className='img'/>
                  <img src='https://cdn.forbes.com.mx/2016/04/image.jpeg' alt='imagen de la jugueteria' className='img'/>
                  <img src='https://infobrisas-s3.cdn.net.ar/s3i233/2024/01/infobrisas/images/44/95/449584_896d0ccab9a2063fbf1e5850bed3b46439b8b8d81ee591630302a6ece67b9c7b/md.webp' alt='imagen de la jugueteria' className='img'/>
                  <img src='https://media.lacapital.com.ar/p/605337aa2dc59dab87b3dd186ac1027f/adjuntos/205/imagenes/101/811/0101811917/dia-del-ninojpg.jpg' alt='imagen de la jugueteria' className='img'/>
                  <img src='https://laprovincianews.com.ar/wp-content/uploads/2022/08/WhatsApp-Image-2022-08-18-at-4.32.24-PM-1.jpeg' alt='imagen de la jugueteria' className='img'/>
                </div>
              </Box>
            </Box>
        </Container>
  )
}

export default AboutUs