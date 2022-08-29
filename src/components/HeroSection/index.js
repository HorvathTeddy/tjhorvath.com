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
import CSharp from '../../images/c#-icon.png'
import DJ from '../../images/django-icon.png'
import Java from '../../images/java-icon.png'
import Python from '../../images/python-icon.png'
import JS from '../../images/js-icon.png'
import RX from '../../images/react-icon.png'


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
                <TechStackImg src={CSharp} type='image/jpg' />
                <TechStackImg src={DJ} type='image/jpg' />
                <TechStackImg src={Java} type='image/jpg' />
                <TechStackImg src={Python} type='image/jpg' />
                <TechStackImg src={JS} type='image/jpg' />
                <TechStackImg src={RX} type='image/jpg' />
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
