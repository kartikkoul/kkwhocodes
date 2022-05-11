import React from 'react'
import SkillBoard from './SkillBoard'
import LinearBackground from '../SVGs/Skills/LinearBackground.svg'
import classes from './Skills.module.css'
import SkillsHeadline from './SkillsHeadline'

const Skills = () => {
  return (
    <section id="skills" className={classes.skills}>
        <p>skills();</p>
        <SkillsHeadline/>
        <SkillBoard/>
        <LinearBackground className={classes.linearBg}/>
    </section>
  )
}

export default Skills