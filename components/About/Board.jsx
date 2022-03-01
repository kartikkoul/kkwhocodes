import React from 'react'
import classes from './Board.module.css'
import Link from 'next/link'

const Board = () => {
  return (
    <div className={classes.aboutBoard}>
        <div className={classes.about}>
                Based out of <span>India</span>, I&apos;m a developer with a passion for all things tech. I enjoy continually learning new concepts and staying up-to-date with the latest tech in this fast-paced environment. Apart from coding,  I love to watch <b>Documentaries</b>, <b>Thrillers</b> and <b>Biopics</b> &amp;  play video games. My favourite video game series are <b>Assassin Creed</b>, <b>Resident Evil</b>, <b>FarCry</b> and <b>Watch Dogs</b>.
                <br /><br />
                My <span>goal</span> is to always improve as a <span>programmer</span> and my intent is to apply the same drive I have for self-improvement to any projects I work on.
                <br /><br />
                On the frontend side, I mostly use <span>React</span>, Designing is mostly done in <b>Figma</b>. Backend wise, I tend to use <span>Node.js</span> with <b>MongoDB</b>.
        </div>
        <div className={classes.action}>
           <Link href='https://drive.google.com/file/d/1Y8xAGKCEfj8cNyaOChNbTiIsmxpljbLq/view?usp=sharing' passHref><a target='_blank'>My Resume 📄</a></Link>
        </div>
        <div className={classes.boardLightSVG}>
          <svg width="100%" height="100%" viewBox="0 0 1313 1117" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_f_529_566)">
            <circle cx="656.5" cy="619.5" r="189.5" fill="#9555FE" fillOpacity="0.36"/>
            </g>
            <defs>
            <filter id="filter0_f_529_566" x="0" y="-37" width="1313" height="1313" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="233.5" result="effect1_foregroundBlur_529_566"/>
            </filter>
            </defs>
          </svg>
        </div>
    </div>
  )
}

export default Board