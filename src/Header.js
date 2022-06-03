import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {FaTimes,FaBars} from 'react-icons/fa'
import './Header.css'

const Header = () => {
    const[click,setClick]=useState(false)


    const handleClick=()=>{
        setClick(!click)
    }
    const closeNav=()=>{
        setClick(!click)
    }
  return (
        <header>
            <nav className='navbar'>
                <div className='logo'>
                    <Link to ='/'><img src='/images/icons/val-symbol.png'/></Link>
                </div>
                <ul className={click?'nav-menu active':'nav-menu'}>
                    <li className='nav-item'>
                        <Link onClick={closeNav} to='/news' className='nav-link'>NEWS</Link>
                    </li>
                    <li className='nav-item'>
                        <Link onClick={closeNav} to='/stories' className='nav-link'>STORIES</Link>
                    </li>
                    <li className='nav-item'>
                        <Link onClick={closeNav} to='/gameplay' className='nav-link'>GAMEPLAY</Link>
                    </li>
                    <li className='nav-item'>
                        <Link onClick={closeNav} to='/agents' className='nav-link'>AGENTS</Link>
                    </li>
                    <li className='nav-item'>
                        <Link onClick={closeNav} to='/maps' className='nav-link'>MAPS</Link>
                    </li>
                    <li className='nav-item'>
                        <Link onClick={closeNav} to='/info' className='nav-link'>INFO</Link>
                    </li>
                </ul>
                <div className='hamburger' onClick={handleClick}>
                    {click? (<FaTimes size={20} style={{color:'#fff'}}/>):(<FaBars style={{color:'fff'}} size={20}/>)}
                </div>
            </nav>
        </header>
  )
}

export default Header;