import React from 'react'
import Board from './Board'
import DisplayPic from './DisplayPic'
import classes from './About.module.css'

const About = () => {
  return (
    <section id="about" className={classes.about}>
        <p>about(kartik);</p>
        <Board/>
        <DisplayPic/>
    </section>
  )
}

export default About