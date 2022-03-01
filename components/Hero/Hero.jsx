import React from 'react';
import Canvas from './Canvas';
import Headline from './Headline';
import classes from './Hero.module.css';

const Hero = () => {
  return <section className={classes.hero}>
      <Headline/>
      <Canvas/>
  </section>;
};

export default Hero;
