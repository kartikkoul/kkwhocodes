import Image from 'next/image';
import React from 'react';
import classes from './ExpItem.module.css'

const ExpItem = (props) => {
  console.log(props)
  return (
    <div className={classes.expItem}>
        <div>
          <h3>{props.title} <small>at {props.company}</small></h3>
          <p>{props.period}</p>
        </div>
        <div className={classes.image}>
          <Image src={props.imageUrl} width="100%" height="100%" alt={props.company} />
        </div>
    </div>
  )
}

export default ExpItem