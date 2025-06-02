import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  es: {
    translation: {
      greeting: 'Hola, soy Renato Rojas :)',
      title: 'Portafolio Ren',
      introduction: "Soy un estudiante de Ingeniería en Ciencias de la Computación de Guatemala. Desde siempre, me ha apasionado la tecnología y lo que se puede lograr con una computadora. Este es mi portafolio.",
      aboutMe_title: "Sobre mí:"
    }
  },
  ja: {
    translation: {
      title: 'ポートフォリオ',
      greeting: 'こんにちは、僕は レナトです 🐉🥳🥳‼️。'
    }
  },
  en: {
        translation: {
        title:"My web portfolio",
        greeting:"Hi! I'm Renato :D",
        introduction:`I'm a student of Computer Science Engineering degree from Guatemala. Since I've memory, I've liked technology and been amused by all things that can be achieved using a computer. This is my porfolio ;).`,
        aboutMe_title:"About me:"
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
