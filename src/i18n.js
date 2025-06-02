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
      achievements_GenTitle:"Logros"

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
