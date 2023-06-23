import React from 'react'
import './About.scss'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

function About() {
    return (
        <>
            <Navbar active={'about'}/>
            <div className="aboutcontainer">
                <h1>About us</h1>
                <p>We build residential, commercial and institutional projects for clients.
                    We make your project stand out. Interested? Let's contact.
                    Contact Us</p>
                <button>
                    <span className='contactus'>Contact Us</span>
                </button>
            </div>
            <Footer/>
        </>
    )
}

export default About