import React from 'react';
import './WorkCardStyles.css';
//import {NavLink} from 'react-router-dom';
import WorkCard from './WorkCard';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './WorkCardStyles.css';
import projectData from './WorkCardData';
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 2,
        slidesToSlide: 1, // optional, default to 1.
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
const Work = (props) => {
    return (
        <div className="work-container">
            <h1 className="project-heading">Projects</h1>
            <div  className={`project-container ${props.isProjectClicked ? 'slide-in-project':''}`}>
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
               {projectData.map((val,ind)=>{
                return (
                    <WorkCard
                    key={ind}
                     title = {val.title}
                     text = {val.text}
                     ul = {val.ul}
                     href = {val.href}
                     />
                )
               })}
               </Carousel>
            </div>
        </div>
    )
}

export default Work;