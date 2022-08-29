import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour, homeObjFive } from '../components/InfoSection/Data'

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
      <InfoSection {... homeObjTwo}/>
      <InfoSection {... homeObjThree}/>
      <InfoSection {... homeObjFour}/>
      <InfoSection {... homeObjFive}/>
    </>
  )
}

export default Home
