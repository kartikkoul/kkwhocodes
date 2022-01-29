import React from 'react';
import classes from './Headline.module.css';


const Headline = () => {
  return <div className={classes.headline}>
      <div className={classes.content}>
        <h1>KARTIK KOUL</h1>
        <ul>
            <li>I imagine</li>
            <li>I create</li>
            <li>I solve</li>
        </ul>
      </div>
  </div>;
};

export default Headline;
