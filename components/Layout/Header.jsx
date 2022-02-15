/* eslint-disable @next/next/link-passhref */
import React from 'react';
import Link from 'next/link';
import classes from './Header.module.css'

const Header = () => {
  return <header className={classes.header}>
      <nav>
          <ul>
              <li><Link href={`/`}>projects()</Link></li>
              <li><Link href={`/`}>skills()</Link></li>
              <li><Link href={`/`}>blogs()</Link></li>
              <li><Link href={`/`}>about()</Link></li>
              <li><Link href={`/`}>contact()</Link></li>
          </ul>
      </nav>
      <div className={classes.brand}>k.</div>
  </header>;
};


export default Header;
