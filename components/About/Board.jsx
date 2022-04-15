import React from 'react'
import classes from './Board.module.css'
import Link from 'next/link'
import { useRef, useState } from 'react/cjs/react.development'
import Arrow from '../SVGs/About/arrow.svg'
import ExpItem from './ExpItem'
import ExpList from './ExpList'
import reducePeriodInMonths from '../Utils/date'

const Board = () => {
  const colors = {
    cyan: '#00B2FF',
    green: '#21d83e',
    purp: '#8f8dfe',
    saffron: '#f7a501',
    yellow: '#fff500'
  }
  const [isActive, setIsActive] = useState(false);
  const exp = [
    {
      id:1,
      title:"Web Developer",
      company:"Tech Table",
      period: period(new Date(2021, 0, 1), new Date(2021, 6, 1)),
      imageUrl:'/assets/images/techtableicon.png'
    },
    {
      id:2,
      title:"Freelancer",
      company:"Self-Employed",
      period: period(new Date(2021, 7, 1)),
      imageUrl:'/assets/images/stay-at-home.png'
    },
    {
      id:3,
      title:"SDE-1",
      company:"AVRL",
      period: period(new Date(2022, 3, 11)),
      imageUrl:'/assets/images/avrl.jpg'
    },
  ]

  function period(date1, date2){
    let period;
    let periodString;
    let periodInYears = 0;
    let rightBound;
    let leftBound = date1.toDateString().split(" ");
    leftBound = [leftBound[1], leftBound[3]].join(" ");
    


    if(date2 && typeof date2 === "object"){
      rightBound = date2.toDateString().split(" ");
      rightBound = [rightBound[1], rightBound[3]].join(" ");
      period = Math.floor((Math.abs(date2-date1)/(1000*60*60*24))/30)
    }else{
      const presentDate = new Date();
      rightBound = "Present"
      period = Math.floor((Math.abs(presentDate-date1)/(1000*60*60*24))/30)
    }
    if(period>12){
      const months = reducePeriodInMonths(period);
      periodString = `${periodInYears} years, ${months} months`
    }else{
      periodString = `${period} months`
    }
    return `${leftBound} - ${rightBound} (${periodString})`
  }
  
  return (
    <div className={classes.aboutBoard}>
        <div className={classes.about}>
                Based out of <span style={{color:colors.saffron}}>India</span>, I&apos;m a developer with a passion for all things tech. I enjoy continually learning new concepts and staying up-to-date with the latest tech in this fast-paced environment. Apart from coding,  I love to watch <b>Documentaries</b>, <b>Thrillers</b> and <b>Biopics</b> &amp;  play video games. My favourite video game series are <b>Assassin Creed</b>, <b>Resident Evil</b>, <b>FarCry</b> and <b>Watch Dogs</b>.
                <br /><br />
                My <span style={{color:colors.purp}}>goal</span> is to always improve as a <span style={{color:colors.yellow}}>programmer</span> and my intent is to apply the same drive I have for self-improvement to any projects I work on.
                <br /><br />
                On the frontend side, I mostly use <span style={{color:colors.cyan}}>React</span>, Designing is mostly done in <b>Figma</b>. Backend wise, I tend to use <span  style={{color:colors.green}}>Node.js</span> with <b>MongoDB</b>.
        </div>
        <div className={classes.action}>
           <Link href='https://drive.google.com/file/d/1Y8xAGKCEfj8cNyaOChNbTiIsmxpljbLq/view?usp=sharing' passHref><a target='_blank'>My Resume 📄</a></Link>
           <div className={classes.experience} onClick={()=>setIsActive(prevState=>!prevState)}>
              <ExpItem {...exp[exp.length-1]}/>
              <Arrow className={isActive && classes.active}/>
           </div>
           {isActive && <ExpList exp={exp}/>}
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