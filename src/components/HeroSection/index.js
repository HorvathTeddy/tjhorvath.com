import React, { useState } from 'react'
import { HeroContainer, HeroBg, VideoBg,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight,
    HeroContent,
    SelfieContainer,
    SelfieImg
        } from './HeroElements'
import Earth from '../../images/earth.jpg'
import Selfie from '../../images/selfie.png'

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
            <VideoBg src={Earth} type='image/jpg' />
        </HeroBg>
        <HeroContent>
            <SelfieContainer>
                <SelfieImg src={Selfie} type='image/png'/>
            </SelfieContainer>
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
