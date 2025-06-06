import { useTranslation } from 'react-i18next'
import './projectsSection.css'

 const handleWatch = (id) => {
    let url = ''
    switch (id) {
      case 1:
        url = 'https://github.com/Ren23813/Lab3_BD1'
        break;
      case 2:
        url = 'https://calicheoficial.lat/Renato/Lab3Web/html/index.html'
        break;
      case 3:
        url = "https://github.com/melisadmendizabal/ProyectoPlataformasMoviles/blob/main/app/src/main/res/values-es-rGT/strings-es.xml"
        break;
      case 4:
        url = "https://github.com/DufreyM/ERP-backend"
        break;
      default:
        break;
    }
    const link = document.createElement('a')
    link.href = url
    link.target = '_blank'
    link.rel = 'noopener noreferrer'
    link.click()
  }


const ProjectCard = ({imagen,titulo,texto,id}) => {
    return(
        <div className='projectCard' onClick={()=>handleWatch(id)}>
            <img src={imagen} className="projectImage"/>
            <div className='projectCardRight'>
                <h3>{titulo}</h3>
                <p>{texto}</p>
            </div>
        </div>
    )

}

const ProjectsSection = () => {
    
    const { t } = useTranslation()
    return(
        <div className="projectsGrid">
            <ProjectCard imagen={"/docker_compose_logo.jpg"} titulo={t('projects_title1')} texto={t('projects_text1')} id={1} />
            <ProjectCard imagen={"/estrella_logo.webp"} titulo={t('projects_title2')} texto={t('projects_text2')} id={2}/>
            <ProjectCard imagen={"/jelly_pet.png"} titulo={t('projects_title3')} texto={t('projects_text3')} id={3}/>
            <ProjectCard imagen={"/jira_logo.svg"} titulo={t('projects_title4')} texto={t('projects_text4')} id={4}/>
 
        </div>
    )
}

export default ProjectsSection