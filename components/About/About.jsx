import React from 'react'
import Board from './Board'
import DisplayFrame from './DisplayFrame'
import classes from './About.module.css'
import BlueLight from '../SVGs/About/Lightning1.svg'
import CyanLight from '../SVGs/About/LightningCyan.svg'


const About = () => {
  return (
    <section id="about" className={classes.about}>
        <p>about(kartik);</p>
        <Board/>
        <DisplayFrame/>
        <BlueLight className={classes.blueLight}/>
        <CyanLight className={classes.cyanLight}/>
    </section>
  )
}

export default About