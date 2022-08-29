import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour} from '../components/InfoSection/Data'
import Projects from '../components/Projects'
const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Navbar toggle={toggle}/>
      <HeroSection />
      <InfoSection {... homeObjOne}/>
      <Projects />
      <InfoSection {... homeObjTwo}/>
      <InfoSection {... homeObjThree}/>
      <InfoSection {... homeObjFour}/>
    </>
  )
}

export default Home
