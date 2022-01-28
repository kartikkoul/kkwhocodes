/* eslint-disable @next/next/link-passhref */
import React from 'react';
import Link from 'next/link';
import classes from './Header.module.css'

const Header = () => {
  return <header className={classes.header}>
      <nav>
          <ul>
              <li><Link href={`/`}>Projects</Link></li>
              <li><Link href={`/`}>Skills</Link></li>
              <li><Link href={`/`}>Blogs</Link></li>
              <li><Link href={`/`}>About</Link></li>
              <li><Link href={`/`}>Contact</Link></li>
          </ul>
      </nav>
      <div className={classes.brand}>k.</div>
  </header>;
};


export default Header;
