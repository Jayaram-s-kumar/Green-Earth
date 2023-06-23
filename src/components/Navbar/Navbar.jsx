import React from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Navbar({ active }) {

    const [open, setOpen] = useState(false)
    const [clicked, setClicked] = useState(false)
    return (
        <div className='navcontainer'>
            <div className="desktopnavbar">
                <div className="logo">
                    <img src="http://greenearthcalicut.com/wp-content/uploads/2021/10/green-earth.png" alt="" />
                </div>
                <div className="options">
                    <ul>

                        <li >
                            <Link className={active == 'home' && 'active'} to={'/'}>Home</Link>
                        </li>
                        <li>
                            <Link className={active == 'about' && 'active'} to={'/about'}>About</Link>
                        </li>
                        <li >
                            <Link className={active == 'services' && 'active'} to={'/service'}>Services</Link>
                        </li>
                        <li >
                            <Link className={active == 'portfolio' && 'active'} to={'/portfolio'}>Portfolio</Link>
                        </li>
                        <li>
                            <Link className={active == 'contact' && 'active'} to={'/contact'}>Contact</Link>
                        </li>
                        <li>
                            <button>
                                <span className='getstarted'>
                                    <Link to={'/contact'} style={{ color: 'white' }}>Get Started</Link>
                                </span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="mobilenavbar">
                <div className="navbar">
                    <div className="logo">
                        <img src="http://greenearthcalicut.com/wp-content/uploads/2021/10/green-earth.png" alt="" />
                    </div>
                    <div className="hamburger" onClick={() => {
                        setOpen(!open)
                        setClicked(true)
                    }}>
                        <img src="/images/hamburger.png" alt="" />
                    </div>
                </div>
                <div className={clicked ? open ? 'mobilemenu open' : 'mobilemenu close' : 'mobilemenu'}>
                    <ul>

                        <li >
                            <Link className={active == 'home' && 'active'} to={'/'} onClick={() => { setOpen(false) }}>Home</Link>
                        </li>
                        <li>
                            <Link className={active == 'about' && 'active'} to={'/about'} onClick={() => { setOpen(false) }}>About</Link>
                        </li>
                        <li >
                            <Link className={active == 'services' && 'active'} to={'/service'} onClick={() => { setOpen(false) }}>Services</Link>
                        </li>
                        <li >
                            <Link className={active == 'portfolio' && 'active'} to={'/portfolio'} onClick={() => { setOpen(false) }}>Portfolio</Link>
                        </li>
                        <li>
                            <Link className={active == 'contact' && 'active'} to={'/contact'} onClick={() => { setOpen(false) }}>Contact</Link>
                        </li>
                        <li>
                            <button>
                                <span className='getstarted'>
                                    <Link to={'/contact'} style={{ color: 'white' }}>Get Started</Link>
                                </span>
                            </button>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Navbar