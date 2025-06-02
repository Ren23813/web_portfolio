import './aboutmeSection.css'
import * as motion from "motion/react-client"
import { FaGamepad,FaShoePrints } from "react-icons/fa"
import { PiPencilLineDuotone } from "react-icons/pi"
import { GiMusicalNotes } from "react-icons/gi"


const AboutMeCard = ({ icono, titulo, texto }) => {
    return (
        <motion.div
            className='aboutmeCard'
            whileHover={{
                scale: [null, 1.1, 1.2],
                boxShadow: "0 8px 20px rgba(185, 21, 200, 0.83)",
                transition: {
                    duration: 0.3,
                    times: [0, 0.2, 1],
                    ease: ["easeInOut", "easeOut"],
                },
            }}
            transition={{
                duration: 0.2,
                ease: "easeOut",
            }}
        >
            <div className='aboutmeIcon'>{icono}</div>
            <h4>{titulo}</h4>
            <p>{texto}</p>
        </motion.div>
    )
}

const AboutmeSection = () => {
    return( 
        <div className='aboutmeRow'>
            <AboutMeCard icono={<FaGamepad/>} titulo={"hola"} texto={"buenas tardes buenas noches buenas noches buenas tardes señoritas y señores"}/>
            <AboutMeCard icono={<PiPencilLineDuotone/>} titulo={"hola"} texto={"buenas tardes buenas noches buenas noches buenas tardes señoritas y señores"}/>
            <AboutMeCard icono={<GiMusicalNotes/>} titulo={"hola"} texto={"buenas tardes buenas noches buenas noches buenas tardes señoritas y señores"}/>
            <AboutMeCard icono={<FaShoePrints/>} titulo={"hola"} texto={"buenas tardes buenas noches buenas noches buenas tardes señoritas y señores"}/>

        </div>

    )
}

export default AboutmeSection