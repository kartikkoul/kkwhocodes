import React from 'react'
import ExpItem from './ExpItem';
import classes from './ExpList.module.css'

const ExpList = (props) => {
    return (
    <ul className={classes.expList}>
        {props.exp.map(item=>{
            return <li key={item.id}><ExpItem {...item}/></li>
        })}
    </ul>
  )
}

export default ExpList