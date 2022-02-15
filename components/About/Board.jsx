import React from 'react'
import classes from './Board.module.css'

const Board = () => {
  return (
    <div className={classes.aboutBoard}>
        <div className={classes.about}>
            Based out of <span>India</span>, I&apos;m a developer with a passion for all things tech. I enjoy continually learning new concepts and staying up-to-date with the latest tech in this fast-paced environment. Apart from coding,  I love to watch Documentaries, Thrillers and Biopics &amp;  play video games. My favourite video game series are Assassin Creed, Resident Evil, FarCry and Watch Dogs.

            My <span>goal</span> is to always improve as a <span>programmer</span> and my intent is to apply the same drive I have for self-improvement to any projects I work on.

            On the frontend side, I mostly use <span>React</span>, Designing is mostly done in Figma. Backend wise, I tend to use <span>Node.js</span> with MongoDB.
        </div>
    </div>
  )
}

export default Board