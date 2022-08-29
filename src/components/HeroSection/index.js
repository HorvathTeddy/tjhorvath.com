import React, { useState } from 'react'
import { HeroContainer, HeroBg, VideoBg,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight,
    HeroContent,
    TechStackContainer,
    TechStack,
    TechStackImg

        } from './HeroElements'
import Earth from '../../images/earth.jpg'
import CI from '../../images/CI.jpg'
import CSharp from '../../images/csharp-icon.png'
import DJ from '../../images/django-icon.png'
import JSG from '../../images/javascript-icon-gif.gif'
import PythonG from '../../images/python-gif.gif'
import ReactG from '../../images/react-gif.gif'
import JavaG from '../../images/java-gif.gif'
import NodeIcon from '../../images/node96-icon.png'
import FI from '../../images/firebase-icon.png'

//import Video from '../../videos/video.mp4'
import { Button } from '../ButtonElements'
const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

  return (
    <HeroContainer id='home'>
        <HeroBg>
            <VideoBg src={Earth} type='image/jpg'></VideoBg>  
        </HeroBg>
        <TechStackContainer>
            <TechStack> 
                <TechStackImg className='techstack-imgs' src={CSharp} type='image/jpg'/>  
                <TechStackImg src={NodeIcon} type='image/jpg' /> 
                <TechStackImg src={JavaG} type='image/jpg' />  
                <TechStackImg src={PythonG} type='image/jpg' /> 
                <TechStackImg src={JSG} type='image/jpg' />  
                <TechStackImg src={DJ} type='image/jpg' />  
                <TechStackImg src={ReactG} type='image/jpg' />  
                <TechStackImg src={FI} type='image/jpg' />  
            </TechStack>
            My Technology Stack
        </TechStackContainer>
        <HeroContent>
            <HeroH1>
                Hello, I'm Teddy!
            </HeroH1>
            <HeroP>
                A passionate and devoted Computer Science undergrad.
            </HeroP>
            <HeroBtnWrapper>
                <Button to='about' onMouseEnter={onHover} onMouseLeave={onHover}  smooth={true} duration={500} spy={true} exact='true' offset={-80} style={{width: '100px', textAlign: 'center'}}>
                    Learn about me{hover ? <ArrowForward /> : <ArrowRight />}
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
