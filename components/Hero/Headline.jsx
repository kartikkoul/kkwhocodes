import React from 'react';
import classes from './Headline.module.css';


const Headline = () => {
  return <div className={classes.headline}>
      <div className={classes.content}>
        <h1>KARTIK KOUL</h1>
        <span>
            <p>I imagine</p>
            <p>I create</p>
            <p>I solve</p>
        </span>
      </div>
  </div>;
};

export default Headline;
