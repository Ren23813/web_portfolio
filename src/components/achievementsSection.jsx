import * as motion from "motion/react-client"
import { useTranslation } from 'react-i18next'
import './achievementsSection.css'
import { IoMdSchool } from "react-icons/io"
import { FaUniversity, FaGuitar } from "react-icons/fa"
import { GiBlackBelt } from "react-icons/gi"
import { LiaDrumSolid } from "react-icons/lia"
import { SiDuolingo } from "react-icons/si"


const AchievementsCard = ({icono,titulo,texto}) => {
     const dotVariants = {
        pulse: {
            scale: [1, 1.05, 1],
            transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
            },
        },
    }

    return(
        <div>
        <motion.div className='achievementCard' variants={dotVariants} animate="pulse">  {/* pulse */}
            <div className='achievementIcon'>{icono}</div>
            <h4>{titulo}</h4>
            <p>{texto}</p>
        </motion.div>
        </div>
    )
}

const AchievementsSection = () => {
    const { t } = useTranslation()
    return (
        <div className='achievementsGrid'>
            <AchievementsCard icono={<IoMdSchool size={60}/>} titulo={t('achievements_title1')} texto={t('achievements_text1')}/>
            <AchievementsCard icono={<FaUniversity size={60}/>} titulo={t('achievements_title2')} texto={t('achievements_text2')}/>
            <AchievementsCard icono={<FaGuitar size={60}/>} titulo={t('achievements_title3')} texto={t('achievements_text3')}/>
            <AchievementsCard icono={<GiBlackBelt size={60}/>} titulo={t('achievements_title4')} texto={t('achievements_text4')}/>
            <AchievementsCard icono={<LiaDrumSolid size={60}/>} titulo={t('achievements_title5')} texto={t('achievements_text5')}/>
            <AchievementsCard icono={<SiDuolingo size={60}/>} titulo={t('achievements_title6')} texto={t('achievements_text6')}/>
        </div>
    )
}

export default AchievementsSection
