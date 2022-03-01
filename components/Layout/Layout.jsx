import React from 'react';
import Header from './Header';
import classes from './Layout.module.css'

const Layout = (props) => {
  return <div className={classes.layout}>
      <Header/>
      {props.children}
  </div>;
};

export default Layout;
