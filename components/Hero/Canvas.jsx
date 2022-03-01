import React from 'react';
import classes from './Canvas.module.css';

const Canvas = () => {
  return <div className={classes.canvasArea}>
    <canvas id="hero-canvas" className={classes.heroCanvas}>

    </canvas>
  </div>;
};

export default Canvas;
