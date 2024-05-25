import React, { useEffect , useState} from 'react'
import Navbar from '../components/Navbar';

import Heroimg2 from '../components/HeroImg2'
import Footer from '../components/Footer';
import Work from '../components/Work';
import AboutContent from '../components/AboutContent';
import Form from '../components/Form';
import Skill from '../components/Skill';
import { useLocation } from 'react-router-dom';

import Certificate from '../components/Certificate';
import Journey from '../components/Journey';
const Home = () => {
  const location = useLocation();

  const [isHomeClicked, setIsHomeClicked] = useState(false);
  const [isProjectClicked, setIsProjectClicked] = useState(false);
  const [isSkillClicked, setIsSkillClicked] = useState(false);
  const [isCertificateClicked, setIsCertificateClicked] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  // const [activeSection, setActiveSection] = useState("");
  useEffect(() => {
  
    const handleSmoothScroll = () => {
      const targetId = location.hash;
      if (targetId) {
        
        const targetElement = document.querySelector(targetId);
        console.log(targetElement);
        if (targetElement) {
        
          targetElement.scrollIntoView({ behavior: 'smooth' });
          if (targetId === "#home") {
            setIsHomeClicked(true);
            console.log(isHomeClicked);
          } else {
            setIsHomeClicked(false);
          }
          if (targetId === "#project") {
            setIsProjectClicked(true);
            console.log(isProjectClicked);
          } else {
            setIsProjectClicked(false);
          }
          if (targetId === "#skills") {
            setIsSkillClicked(true);
            console.log(isProjectClicked);
          } else {
            setIsSkillClicked(false);
          }
          if (targetId === "#certificates") {
            setIsCertificateClicked(true);
            
          } else {
            setIsCertificateClicked(false);
          }
          
        }
      }
    };
  
    handleSmoothScroll();
  
  }, [location]);
  return (

    <div>
      
      <section id="home"><Navbar />
     
      <Heroimg2
        heading="Welcome!"
        text="I develop wonders of the software world"
        isHomeClicked = {isHomeClicked}
      />
      </section>
      <section id="skills"><Skill isSkillClicked={isSkillClicked} /></section>
      <section id="journey"><Journey /></section>
      <section id="certificates"> <Certificate isCertificateClicked = {isCertificateClicked}/> </section>
      <section id="project"> <Work isProjectClicked={isProjectClicked} /> </section>
      <section id="contact"><Form /></section>
      <Footer />
    </div>
  )
}

export default Home