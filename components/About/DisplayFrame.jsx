import React from 'react'
import classes from './DisplayFrame.module.css'
import Outer from '../SVGs/About/DisplayFrame/Outer.svg'
import Inner from '../SVGs/About/DisplayFrame/Inner.svg'

const DisplayPic = () => {
  return (
    <div className={classes.displayFrame}>
      <Outer className={classes.outerFrame}/>
      <Inner className={classes.innerFrame}/>
    </div>
  )
}

export default DisplayPic