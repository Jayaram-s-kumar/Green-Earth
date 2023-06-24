import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './Home.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from 'react';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';


function Home() {

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className={className} onClick={onClick} >
        <img src="/images/arrowright.png" alt="" />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className={className} onClick={onClick} >
        <img src="/images/arrowleft.png" alt="" />
      </div>
    );
  }


  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  const allData = [{
    image: '/images/house1.jpg',
    desc: 'Lorem, ipsum dolor.'
  }, {
    image: '/images/house2.jpeg',
    desc: 'Lorem, ipsum dolor.'
  }, {
    image: 'images/house3.jpeg',
    desc: 'Lorem, ipsum dolor.'
  },
  {
    image: 'images/house4.jpeg',
    desc: 'Lorem, ipsum dolor.'
  },
  {
    image: 'images/house5.jpeg',
    desc: 'Lorem, ipsum dolor.'
  }]

  const commercialData = [{
    image: '/images/house6.jpeg',
    desc: 'Lorem, ipsum dolor.'
  }, {
    image: '/images/house7.jpeg',
    desc: 'Lorem, ipsum dolor.'
  }, {
    image: 'images/house8.jpeg',
    desc: 'Lorem, ipsum dolor.'
  },
  {
    image: 'images/house9.jpeg',
    desc: 'Lorem, ipsum dolor.'
  },
  {
    image: 'images/house10.jpeg',
    desc: 'Lorem, ipsum dolor.'
  }]

  const resedentialData = [{
    image: '/images/house11.jpeg',
    desc: 'Lorem, ipsum dolor.'
  }, {
    image: '/images/house12.jpeg',
    desc: 'Lorem, ipsum dolor.'
  }, {
    image: 'images/house13.jpeg',
    desc: 'Lorem, ipsum dolor.'
  },
  {
    image: 'images/house14.jpeg',
    desc: 'Lorem, ipsum dolor.'
  },
  {
    image: 'images/house15.jpeg',
    desc: 'Lorem, ipsum dolor.'
  }]

  const [cardData, setCardData] = useState(allData)
  const [active, setActive] = useState(1)


  return (
    <>
      <Navbar active={'home'} />
      <div className='homecontainer'>
        <div className="hero">
          <div className='welcome'>
            <h1>Welcome to <br /> Green Earth</h1>
            <p>Infrastructure & Developers LLP</p>
          </div>
          <div className="green">
            <div>
              <div className="logo">
                <img src="https://www.ekko-wp.com/static/wp-content/uploads/sites/3/2019/04/icon4.png" alt="" />
              </div>
              <div className="text">
                <p>Office Time <br />
                  Mon - Sat: 09:00 - 06:00</p>
              </div>
            </div>

            <div>
              <div className="logo">
                <img src="https://www.ekko-wp.com/static/wp-content/uploads/sites/3/2019/04/icon6.png" alt="" />
              </div>
              <div className="text">
                <p>Office Address <br />
                  A3 Building, Kottaram Rd, <br />
                  East Nadakkave, Calicut</p>
              </div>
            </div>

            <div>
              <div className="logo">
                <img src="https://www.ekko-wp.com/static/wp-content/uploads/sites/3/2019/04/icon5.png" alt="" />
              </div>
              <div className="text">
                <p>Get In Touch <br />
                  +91 90202 30397</p>
              </div>
            </div>
          </div>
        </div>

        <div className="homesparkle">
          <div className="left">
            <h1>We'll make your home sparkle</h1>
            <p>A selection of our core specialties include;</p>

            <div className="ticks">

              <div className="ticksright">
                <div>
                  <img src="/images/check.png" alt="" />
                  <p>Experienced team</p>
                </div>
                <div>
                  <img src="/images/check.png" alt="" />
                  <p>Attention to detail</p>
                </div>
                <div>
                  <img src="/images/check.png" alt="" />
                  <p>Quality oriented</p>
                </div>
              </div>

              <div className="ticksleft">
                <div>
                  <img src="/images/check.png" alt="" />
                  <p>Sustainable design</p>
                </div>
                <div>
                  <img src="/images/check.png" alt="" />
                  <p>Innovative design</p>
                </div>
                <div>
                  <img src="/images/check.png" alt="" />
                  <p>Exceptional customer service</p>
                </div>
              </div>

            </div>

            <button>
              <span className="getstarted">
                <Link to={'/contact'}>Get Started</Link>
              </span>
            </button>

          </div>
          <div className="right">
            <img className='rightimage' src="/images/sparkleright.jpg" alt="" />
          </div>
        </div>

        <div className="ourservices">
          <h1>Our Services</h1>

          <div className='carousalcontainer'>
            <div>

              <Slider {...settings}>
                <div className='card'>

                  <div>
                    <img src="/images/architecture.jpg" alt="" />
                  </div>


                  <h3>Architecture</h3>

                </div>
                <div className='card'>
                  <div>
                    <img src="/images/interiordesign.jpg" alt="" />
                  </div>

                  <h3>Interior design</h3>

                </div>
                <div className='card'>
                  <div>
                    <img src="/images/supervision.jpg" alt="" />
                  </div>

                  <h3>Supervision</h3>

                </div>
                <div className='card'>
                  <div>
                    <img src="/images/landscaping.jpg" alt="" />
                  </div>

                  <h3>Landscaping</h3>

                </div>
                <div className='card'>
                  <div>
                    <img src="/images/contract.jpg" alt="" />
                  </div>

                  <h3>Contracting and Construction</h3>

                </div>

              </Slider>
            </div>

          </div>
        </div>

        <div className="latestworks">
          <h1>Our Latest Works</h1>
          <p>We build residential, commercial and institutional projects for clients. We make your project stand out. Interested? Let's contact.</p>
          <div className='portfoliocontainer'>

            <div className="options">
              <div onClick={() => {
                setCardData(allData)
                setActive(1)
              }}>
                <p style={active == 1 ? { color: 'black' } : { color: 'gray' }} >All</p>
              </div>
              <div onClick={() => {
                setCardData(commercialData)
                setActive(2)
              }}>
                <p style={active == 2 ? { color: 'black' } : { color: 'gray' }}>Commercial</p>
              </div>
              <div onClick={() => {
                setCardData(resedentialData)
                setActive(3)
              }}>
                <p style={active == 3 ? { color: 'black' } : { color: 'gray' }}>Resedential</p>
              </div>
            </div>

            <div className="houses">
              {
                cardData.map((obj) => {
                  return (
                    <div className="card" style={{ backgroundImage: `url(${obj.image})` }}>

                      <div className="small">
                        <h4>{obj.desc}</h4>
                      </div>
                    </div>
                  )
                })
              }
            </div>



          </div>
        </div>

        <div className="letscontact">
          <div className="letscontactleft">
            <h1>Let's Contact Us</h1>
            <p className='givecall'>Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours on business days.
            </p>
            <div className="contactmethods">
              <div>
                <img src="/images/phone-call.png" alt="" />
                <p className="bold">Phone</p>
                <p className="thin">+91 90202 30397</p>
              </div>
              <div>
                <img src="/images/email.png" alt="" />
                <p className="bold">Email</p>
                <p className="thin">greenearthclts@ <br /> gmail.com</p>
              </div>
              <div>
                <img src="/images/alarm-clock.png" alt="" />
                <p className="bold">Opening hours</p>
                <p>09:00 - 06:00</p>
              </div>
            </div>
          </div>
          <div className="letscontactright">
            <div className="form">
              <h1>
                Request a free quote. <br />
                Best rate guaranteed!
              </h1>

              <div>
                <input type="text" placeholder='First name' />
                <input type="text" placeholder='Last name' />
                <input type="text" placeholder='Email address' />
                <input type="text" placeholder='Phone number' />

                <button><span className="submit">Submit</span></button>

              </div>

            </div>
          </div>
        </div>

        <div className='mobilefooter'>
          <p> 2022 Green Earth. All rights reserved. Made with ❤️ by Igoraza</p>
        </div>

        <div className='desktopfooter'>
          <p> 2022 Green Earth. All rights reserved. Made with ❤️ by Igoraza</p>
        </div>



      </div>

    </>
  )
}

export default Home