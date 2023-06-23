import React from 'react'
import './Service.scss'
import Carousal from '../../components/Carousal/Carousal'
import Navbar from '../../components/Navbar/Navbar'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from '../../components/Footer/Footer';


function Service() {

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


    return (
        <>
            <Navbar active={'services'} />

            <div className='servicecontainer'>
                <div className="ourservices">
                    <h1>Our services</h1>
                    <p>We build residential, commercial and institutional projects for clients.
                        We make your project stand out. Interested? Let's contact.</p>

                </div>

                <div className="whatwedo">
                    <h1>What we do</h1>
                    <p>Build a positive impact on your business. Check out what we have to offer.</p>

                  

                </div>
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

                <div className="intrested">
                    <h1>Interested? Let's get in touch!</h1>
                    <p>We build residential, commercial and institutional projects for clients. We make your project stand out. Interested? Let's contact.</p>
                    <button><span className="getstarted">Get Started</span></button>
                </div>

            </div>
            <Footer/>
        </>
    )
}

export default Service


