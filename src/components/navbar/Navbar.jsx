import './navbar.css'

import React, { useState } from 'react'
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri'

import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'

//BEM => Block Element Modifier

const Menu = () => (
  <>
    <p>
      <Link to='/'>Home</Link>
    </p>
    <p>
      <Link to='/wgpt3'>What is GPT3?</Link>
    </p>
    <p>
      <Link to='/possibility'>OpenAi</Link>
    </p>
    <p>
      <Link to='/features'>Case Studies</Link>
    </p>
    <p>
      <Link to='/blog'>Library</Link>
    </p>
  </>
)

export const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='gpt3__navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='gpt3__navbar-sign'>
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
      <div className='gpt3__navbar-menu'>
        {toggleMenu ? (
          <RiCloseLine
            color='#fff'
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color='#fff'
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className='gpt3__navbar-menu_container scale-up-center'>
            <div className='gpt3__navbar-menu_container-links'>
              <Menu />
              <div className='gpt3__navbar-menu_container-links-sign'>
                <p>Sign in</p>
                <button type='button'>Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
