import React from 'react'
import { useState } from 'react'
import './Portfolio.scss'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

function Portfolio() {


    const allData = [{
        image: '/images/house1.jpg',
        desc: 'Residence for Mr Noushad VK.'
    }, {
        image: '/images/house2.jpeg',
        desc: 'Residence of Afsal Erannolikkandi.'
    }, {
        image: 'images/house3.jpeg',
        desc: 'Residence for Diya.'
    },
    {
        image: 'images/house4.jpeg',
        desc: 'Residence of Mr Ussainkutty Haji.'
    },
    {
        image: 'images/house5.jpeg',
        desc: 'Residence of Mr Nisar Vadakkeparambil.'
    }]

    const commercialData = [{
        image: '/images/house6.jpeg',
        desc: 'Residence of Mr Nisar Vadakkeparambil.'
    }, {
        image: '/images/house7.jpeg',
        desc: 'Residence of Mr Ussainkutty Haji.'
    }, {
        image: 'images/house8.jpeg',
        desc: 'Residence for Diya.'
    },
    {
        image: 'images/house9.jpeg',
        desc: 'Residence of Afsal Erannolikkandi.'
    },
    {
        image: 'images/house10.jpeg',
        desc: 'Residence for Mr Noushad VK.'
    }]

    const resedentialData = [{
        image: '/images/house11.jpeg',
        desc: 'Residence of Mr Nisar Vadakkeparambil.'
    }, {
        image: '/images/house12.jpeg',
        desc: 'Residence for Diya.'
    }, {
        image: 'images/house13.jpeg',
        desc: 'Residence of Mr Ussainkutty Haji.'
    },
    {
        image: 'images/house14.jpeg',
        desc: 'Residence for Mr Noushad VK.'
    },
    {
        image: 'images/house15.jpeg',
        desc: 'Residence of Afsal Erannolikkandi.'
    }]

    const [cardData, setCardData] = useState(allData)
    const [active, setActive] = useState(1)

    return (
        <>
            <Navbar active={'portfolio'}/>
            <div className='portfoliocontainer'>
                <div className="navigation">
                    <h1>Portfolio</h1>
                    <p><span className='greenearth'>Green Earth</span> &nbsp; &nbsp;> &nbsp; &nbsp; Portfolio</p>

                </div>

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

                <div className="intrested">
                    <h1>Interested? Let's get in touch!</h1>
                    <p>We build residential, commercial and institutional projects for clients. We make your project stand out. Interested? Let's contact.
                    </p>
                    <button>
                        <span className='contactus'>Get started</span>
                    </button>
                </div>

            </div>
            <Footer/>
        </>
    )
}

export default Portfolio