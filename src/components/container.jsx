"use client"

import React, { useState, useEffect } from 'react'
import { motion, useSpring, useScroll } from "motion/react"
import { useTranslation } from 'react-i18next'
import './container.css'
import LineaHorizontal from './lineaHorizontal'
import AboutmeSection from './aboutmeSection'


const Container = () => {
    const [useJapaneseGreeting, setUseJapaneseGreeting] = useState(false)
    const { scrollYProgress } = useScroll()
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
                }}
            />
        <div className='containerGeneral'>
            <h1>{useJapaneseGreeting ? i18n.getFixedT('ja')('greeting') : t('greeting')} </h1>
            <h3>{t('introduction')}</h3>
            <LineaHorizontal/>
            <br/>
            <h2>{t('aboutMe_title')}</h2>
            <AboutmeSection/>
            <br/>
            <br/>
            <br/>
            <br/>
            <h2>hola</h2>
        </div>
        </>
    )
}

export default Container