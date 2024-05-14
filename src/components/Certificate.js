import React from 'react';
import './CertificateStyles.css';
//import {NavLink} from 'react-router-dom';
import './WorkCardStyles.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { certData } from './CertData';
import { NavLink } from 'react-router-dom';
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
        slidesToSlide: 1,
        // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};
const Certificate = (props) => {
    const logotest = '';
    return (
        <div className="work-container">
            <h1 className="cert-heading">Certificates</h1>
            <div className={`cert-container ${props.isCertificateClicked ? 'slide-in-certificate' : ''}`}>
                < Carousel
                   additionalTransfrom={0}
                   arrows
                   autoPlaySpeed={3000}
                   centerMode={false}
                   className=""
                   containerClass="container"
                   dotListClass=""
                   draggable
                   focusOnSelect={false}
                   infinite={false}
                   itemClass=""
                   keyBoardControl
                   minimumTouchDrag={80}
                   pauseOnHover
                   renderArrowsWhenDisabled={false}
                   renderButtonGroupOutside={false}
                   renderDotsOutside={false}
                   responsive={responsive}
                   rewind={false}
                   rewindWithAnimation={false}
                   rtl={false}
                   shouldResetAutoplay
                   showDots={false}
                   sliderClass=""
                   slidesToSlide={1}
                   swipeable
                >

                    {certData.map((val, ind) => {

                        return (
                            <div className="cert-card">
                                <div>
                                    {val.logo}
                                </div>
                                <div className="cert-title">
                                    {val.title}
                                </div>
                                <div style={{ width: '100%' }}>
                                    <div className="cert-platform">
                                        {val.platform}
                                    </div>
                                    <div className='cert-number'> Certificate No:{" "} {val.number}</div>
                                    <div className="cert-btns">
                                        <button to="" className="btn btn-cert">View</button>
                                    </div>
                                </div>
                            </div>

                        )

                    })}

                </Carousel>
            </div>
        </div>
    )
}
export default Certificate;