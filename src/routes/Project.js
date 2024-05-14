import React from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import HeroImg2 from '../components/HeroImg2';
import WorkCard from '../components/WorkCard';
import Work from '../components/Work';
const Project = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="PROJECTS" text="Have a look at some of my recent works"/>
      <Work/>
      <Footer/>
    </div>
  )
}

export default Project