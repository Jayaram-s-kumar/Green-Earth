import React from 'react'
import './Carousal.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousal() {

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
        <div>
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
    )
}

export default Carousal