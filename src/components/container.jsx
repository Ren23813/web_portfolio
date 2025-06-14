"use client"

import React, { useState, useEffect } from 'react'
import { motion, useSpring, useScroll } from "motion/react"
import { useTranslation } from 'react-i18next'
import './container.css'
import LineaHorizontal from './lineaHorizontal'
import AboutmeSection from './aboutmeSection'
import AchievementsSection from './achievementsSection'
import SkillsSection from './skillsSection'
import ProjectSection from './projectsSection'
import ContactSection from './contactSection'


const Container = () => {
    const [useJapaneseGreeting, setUseJapaneseGreeting] = useState(false)
    const { scrollYProgress } = useScroll()
    const [isSpanish, setIsSpanish] = useState(true)
    const toggleLanguage = () => {
        const newLanguage = isSpanish ? 'en' : 'es'
        i18n.changeLanguage(newLanguage)
        setIsSpanish(!isSpanish)
    }
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    })
    const { t, i18n } = useTranslation()

    useEffect(() => {
        const params = new URLSearchParams(window.location.search)
        if (params.has('uwu')) {
            setUseJapaneseGreeting(true)
            document.title = i18n.getFixedT('ja')('title') 
        } else {
            document.title = t('title')
        }
    }, [t, i18n])

    return(
        <>
        <div className="slider-container">

            <div className="toggle-container" onClick={toggleLanguage}>
                <span className="lang-label left">ES</span>
                <span className="lang-label right">EN</span>
                <motion.div
                    className="toggle-handle"
                    animate={{
                    left: isSpanish ? 0 : 50,
                    }}
                    transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                    bounce: 0.2,
                    }}
                />
            </div>
        </div>
        <motion.div
                id="scroll-indicator"
                style={{
                    scaleX,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 10,
                    originX: 0,
                    backgroundColor: "#8710b7",
                    zIndex:1
                }}
            />
        <div className='containerGeneral'>
            <h1>{useJapaneseGreeting ? i18n.getFixedT('ja')('greeting') : t('greeting')} </h1>
            <h3>{t('introduction')}</h3>
            <LineaHorizontal/>
            <h2>{t('aboutMe_GenTitle')}</h2>
            <AboutmeSection/>
            <LineaHorizontal/>
            <h2>{t('achievements_GenTitle')}</h2>
            <h3>{t('achievements_subtitle')}</h3>
            <AchievementsSection/>
            <LineaHorizontal/>
            <h2>{t('skills_GenTitle')}</h2>
            <h3>{t('skills_subtitle')}</h3>
            <SkillsSection/>
            <LineaHorizontal/>
            <h2>{t('projects_GenTitle')}</h2>
            <h3>{t('projects_subtitle')}</h3>
            <ProjectSection/>
            <LineaHorizontal/>
            <br/>
            <h3>{t('contact_GenTitle')}</h3>
            <ContactSection/>
            <br/>
        </div>
        </>
    )
}

export default Container