import * as motion from "motion/react-client"
import { useTranslation } from 'react-i18next'
import './contactSection.css'
import { FaGithub } from "react-icons/fa"

const handleWatch = () => {
    let url = 'https://github.com/Ren23813'
    const link = document.createElement('a')
    link.href = url
    link.target = '_blank'
    link.rel = 'noopener noreferrer'
    link.click()
  }

const ContactSection = () => {
    const { t, i18n } = useTranslation()
    return(
       <div className="contactSectionColumn">
            <div className='contactSectionRow'>
                <h4>{t('contact_subtitle')}</h4>
                <h5>{t('contact_email')}</h5>
            </div>
            <FaGithub size={80} onClick={()=>handleWatch()} className="githubIcon"/>
       </div>
    )
}

export default ContactSection

//  <div className="contactSectionColumn">
//             <></>
//         </div>