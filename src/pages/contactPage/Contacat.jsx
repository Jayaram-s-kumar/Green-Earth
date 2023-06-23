import React from 'react'
import './Contact.scss'
import Navbar from '../../components/Navbar/Navbar'

function Contacat() {
    return (

        <>
            <Navbar active={'contact'} />

            <div className='contactContainer'>
                <div className="hero">
                    <h1>Let's get in touch</h1>
                    <p>We build residential, commercial and institutional projects for clients. We make your project stand out. Interested? Let's contact.</p>
                </div>

                <div className="support">
                    <div>
                        <img src="/images/location.png" alt="" />
                        <p>Address</p>
                        <p className="text">
                            Lorem ipsum dolor, sit amet consectetur adipisicing.
                        </p>
                    </div>
                    <div>
                        <img src="/images/mobile.png" alt="" />
                        <p>Phone Support</p>
                        <p className="text">
                            Lorem ipsum dolor, sit amet consectetur adipisicing.
                        </p>
                    </div>
                    <div>
                        <img src="/images/mail.png" alt="" />
                        <p>Email</p>
                        <p className="text">
                            Lorem ipsum dolor, sit amet consectetur adipisicing.
                        </p>
                    </div>

                </div>

                <div className="contactform">
                    <div className="map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31303.12138627584!2d75.774378!3d11.269483!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65fffc3f2eb95%3A0x83f9652730eefc6d!2sGreen%20Earth%20infrastructure!5e0!3m2!1sen!2sin!4v1687357962108!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='mapobj'></iframe>
                    </div>
                    <div className="contact">

                        <div className="title">
                            <h1>Contact us</h1>
                            <p>Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours on business days.</p>
                        </div>

                        <div className="inputs">
                            <input type='text' placeholder='Your name' />
                            <input type="text" placeholder='Your email' />
                            <textarea placeholder='Your message' ></textarea>
                            <button>Send Message</button>
                        </div>
                    </div>
                </div>


            </div>
        </>




    )
}

//#00BA3B

export default Contacat