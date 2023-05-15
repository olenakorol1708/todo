import {Outlet} from 'react-router-dom';

import {NavLink} from 'react-router-dom';
import React from 'react'

export const Layout = () => {
  return (
    <>
    <header className="App">
    <NavLink to = "/"> Back to Loginpage</NavLink>
    <NavLink to = "/todo"></NavLink>
  </header>
  <main className='main-container'>
  <Outlet/>
  </main>
  
  <footer className='footer-container'>2023</footer>
  </>
  )
}
