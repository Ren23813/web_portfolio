import './aboutmeSection.css'
import * as motion from "motion/react-client"
import { FaGamepad,FaShoePrints } from "react-icons/fa"
import { PiPencilLineDuotone } from "react-icons/pi"
import { GiMusicalNotes } from "react-icons/gi"
import { useTranslation } from 'react-i18next'


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
    const { t } = useTranslation()
    
    return( 
        <div className='aboutmeRow'>
            <AboutMeCard icono={<FaGamepad/>} titulo={t('aboutMe_title1')} texto={ t('aboutMe_text1') }/>
            <AboutMeCard icono={<PiPencilLineDuotone/>} titulo={t('aboutMe_title2')} texto={ t('aboutMe_text2') }/>
            <AboutMeCard icono={<GiMusicalNotes/>} titulo={t('aboutMe_title3')} texto={t('aboutMe_text3')  }/>
            <AboutMeCard icono={<FaShoePrints/>} titulo={t('aboutMe_title4')} texto={ t('aboutMe_text4') }/>
        </div>

    )
}

export default AboutmeSection