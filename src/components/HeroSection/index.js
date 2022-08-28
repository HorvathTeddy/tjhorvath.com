import React, { useState } from 'react'
import { HeroContainer, HeroBg, VideoBg,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight,
    HeroContent
        } from './HeroElements'
import Earth from '../../images/earth.jpg'
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
            <HeroH1>
                Hi I'm Teddy!
            </HeroH1>
            <HeroP>
                C.S. Undergrad
            </HeroP>
            <HeroBtnWrapper>
                <Button to='about' onMouseEnter={onHover} onMouseLeave={onHover}  >
                    \/ {hover ? <ArrowForward /> : <ArrowRight />}
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
