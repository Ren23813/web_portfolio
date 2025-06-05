import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  es: {
    translation: {
      greeting: 'Hola, soy Renato Rojas :)',
      title: 'Portafolio Ren',
      introduction: "Soy un estudiante de Ingeniería en Ciencias de la Computación de Guatemala. Desde siempre, me ha apasionado la tecnología y lo que se puede lograr con una computadora. Este es mi portafolio.",
      aboutMe_GenTitle: "Sobre mí:",
      aboutMe_title1:"Videojuegos",
      aboutMe_text1:"Siempre me ha gustado jugar videojuegos. Es algo que realmente disfruto y aspiro algún día trabajar creándolos. Mi videojuego favorito es Persona 5.",
      aboutMe_title2:"Escribir",
      aboutMe_text2:"Disfruto escribir historias que creo en mi mente, pues me fascina idear mundos y personajes con los cuales las personas se puedan sentir identificados, o para reflejar sentimientos humanos.",
      aboutMe_title3: "Música",
      aboutMe_text3:"Considero que la música es una de las mayores expresiones y logros del ser humano, pues es capaz de transmitir tantos sentimientos de una manera tan simple y compleja a la vez.",
      aboutMe_title4:"Caminar",
      aboutMe_text4:"Disfruto caminar. Es una actividad realmente relajante y positiva, pues otorga una paz inigualable (y ayuda con la salud :D).",
      achievements_GenTitle:"Logros",
      achievements_subtitle:"Si tuviera experiencia laboral, la colocaría aquí; pero como no tengo, pues tendré que mencionar otras cosas JAJA.",
      achievements_title1:"Colegio",
      achievements_text1:"En el colegio siempre tuve notas altas, demostrando no solo una buena capacidad de adaptación, sino que constancia y perseverancia. Logré todos los diplomas y medallas posibles de cada año académico.",
      achievements_title2:"Universidad",
      achievements_text2:"En mis 2 años y medio (hasta este momento) en la Universidad del Valle de Guatemala, he logrado 2 reconocimientos de 'estudiante distinguido', manteniendo un promedio de 90 a 95.",
      achievements_title3:"Música",
      achievements_text3:"Estudié y cerré pensum de Diplomado en Guitarra, en el Conservatorio Nacional de Música Germán Alcántara, habiendo estudiado ahí en los años 2018-2022.",
      achievements_title4:"Karate",
      achievements_text4:"Estudié karate durante 8 años, logrando obtener el grado de cinta negra. Durante esa educación, aprendí el valor de la disciplina.",
      achievements_title5:"Varios instrumentos",
      achievements_text5:"Sé tocar guitarra en gran manera (debido a la educación que tuve), pero también piano y batería, aprendidos por cursos cortos y cuenta propia.",
      achievements_title6:"Duolingo",
      achievements_text6:"Tengo una racha de 2666 días (a fecha de hoy 02/06/2025) en Duolingo... No sé si es un logro o un problema, pero al menos sé que soy constante :D.",
      skills_GenTitle:"Habilidades y gustos profesionales",
      skills_subtitle:"Este tercer año, descrubrí que me gusta bastante investigar sobre las tecnologías a utilizar: qué versión, cuál queda mejor, qué vale la pena contenerizar y qué no. Aquí algunas de estas tecnologías que me gustaron:",
      projects_GenTitle:"Proyectos",
      projects_subtitle:"Algunos de los proyectos o trabajos que he realizado, de los cuales estoy orgulloso o, al menos, me gustó hacerlos.",
      projects_title1:"Docker-compose: BD",
      projects_text1:"Realicé un manejo de 3 imágenes de Docker, para BD, back y front utilizando un único docker-compose para su ejecución simultánea, pero ordenada. Además, administré todo el backend para ese proyecto.",
      projects_title2:"Historia HTML-only",
      projects_text2:"Me gustó mucho la historia que creé para el lab de HTML-only. Retraté un mundo fantasioso, donde las emociones humanas eran reales; personajes con historias levemente exageradas, pero con pensamientos realistas.",
      projects_title3:"Historias proyecto Plataformas Móviles",
      projects_text3:"Nuestro proyecto para esa clase era una aplicación de ayuda y acompañamiento de salud mental. Yo creé cada una de las historias para cada personaje (mascota) que incluímos en el proyecto, así el usuario se podría sentir identificado ayudándolas.",
      projects_title4:"Proyecto Ing. Software",
      projects_text4:"El proyecto que estoy trabajando actualmente. Me estoy centrando especialmente en el backend, en la configuración de Docker y en las migraciones con Objection.js. Esperemos que salga todo bien en el semestre que falta :D.",
      contact_GenTitle:"Contáctame",
      contact_subtitle:"Correo:",
      contact_email:"roj23813@uvg.edu.gt"


    }
  },
  ja: {
    translation: {
      title: 'ポートフォリオ ‼️‼️',
      greeting: 'こんにちは、僕は レナトです 🐉🥳🥳‼️。'
    }
  },
  en: {
        translation: {
        title:"My web portfolio",
        greeting:"Hi! I'm Renato :D",
        introduction:`I'm a student of a Computer Science Engineering degree from Guatemala. Since I've memory, I've liked technology and been amused by all things that can be achieved using a computer. This is my porfolio ;).`,
        aboutMe_GenTitle:"About me:",
        aboutMe_title1:"Videogames",
        aboutMe_text1:"I've always loved playing videogames. It's something I really enjoy and I aspire to work creating them. My favorite videogame is Persona 5.",
        aboutMe_title2:"Writing",
        aboutMe_text2:"I really enjoy writing stories that I imagine, because I love creating worlds and characters which people can feel empathy, or to reflex human feelings.",
        aboutMe_title3:"Music",
        aboutMe_text3:"I think that the music is one of the most wonderful expressions and achievements of the human beings, because it's able to communicate so many feelings in a simple yet complex way.",
        aboutMe_title4:"Walking",
        aboutMe_text4:"I really enjoy walking. I believe it's a very relaxing and positive activity, that brings an incomparable peace (and it improves your health :D).",
        achievements_GenTitle:"Achievements",
        achievements_subtitle:"If I had laboral experience, I would presume it here... Since I don't, I'll mention other things. ",
        achievements_title1:"School",
        achievements_text1:"In school, I always had good grades, showing not only a good adaptability, but also perseverance. I got all the possible diplomas and medals in each academic year.",
        achievements_title2:"University",
        achievements_text2:"In my two and a half years studying in the 'Universidad del Valle de Guatemala', I've got two mentions of 'distinguished student' by having a grade mean between 90 and 95 points.",
        achievements_title3:"Music",
        achievements_text3:"I studied and finished the weekend-program of guitar studies, in the National Music Conservatory 'Germán Alcántara', between the years 2018-2022.",
        achievements_title4:"Karate",
        achievements_text4:"I studied karate for 8 years, earning the grade of black belt. During that education, I learnt the value of discipline.",
        achievements_title5:"Many instruments",
        achievements_text5:"I know very well how to play the guitar (due to my previous education); however, I also know how to play the piano and drums, which I learnt in short courses and self-teaching.",
        achievements_title6:"Duolingo",
        achievements_text6:"I have a 2666 days lesson-streak in Duolingo (at today's date 06-02-2025). I don't know if it should be called an 'achievement', but at least that means I'm very consistent :D.",
        skills_GenTitle:"Skills and professional likings",
        skills_subtitle:"This third year, I figured that I like searching for the correct technology/library to use: what version, what suits the best for the occasion, what is worth containerizing or not. Here are some of those technologies that I liked:",
        projects_GenTitle:"Projects",
        projects_subtitle:"Some of the projects or labs I've done, of which I am proud of (or enjoyed making them!)",
        projects_title1:"Docker-compose: DB",
        projects_text1:"Made the management of 3 docker-images, for the DB, backend and frontend, using a single docker-compose for it's simultaneous and ordered start.",
        projects_title2:"HTML-only story",
        projects_text2:"I really liked the story I created for that lab. I made a fantasy world with real human emotions. A bit exaggerated backstory for each character, yet each one having realistic thoughts.",
        projects_title3:"Mobile Platforms class project",
        projects_text3:"Our project for that class was an application to take care of mental health. I created an individual story for each character (presented as pets in the app) in the project, for the user to feel identified with them, while helping them through their own problems.",
        projects_title4:"Software Engineering project",
        projects_text4:"The project I'm currently working on. I'm in charge of the backend development, as well as all the Docker logistic and database migrations. Wish me luck to being able to complete it the incoming semester :D.",
        contact_GenTitle:"Contact me",
        contact_subtitle:"Email:",
        contact_email:"roj23813@uvg.edu.gt"





    }
  },
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'es',
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false
    }
  })

export default i18n
