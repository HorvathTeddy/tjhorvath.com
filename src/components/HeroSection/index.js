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
import CSharpI from '../../images/csharp-icon.png'
import DjangoI from '../../images/django-icon.png'
import JavascriptI from '../../images/javascript-icon-gif.gif'
import PythonI from '../../images/python-gif.gif'
import ReactI from '../../images/react-gif.gif'
import JavaI from '../../images/java-gif.gif'
import NodeI from '../../images/node96-icon.png'
import FirebaseI from '../../images/firebase-icon.png'
import { Button } from '../ButtonElements'

const AWSI = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg'
const CplusI = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg'
const HerokuI = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain.svg'
const MongoI = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
const MatlabI = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg'

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

  return (
    <HeroContainer id='home'>
        <HeroBg>
            {/* <VideoBg src='' type='image/jpg'></VideoBg>   */}
        </HeroBg>
        <TechStackContainer>
            <TechStack> 
                <TechStackImg className='techstack-imgs' src={CplusI} type='image/jpg'/>  
                <TechStackImg src={NodeI} type='image/jpg' /> 
                <TechStackImg src={JavaI} type='image/jpg' />  
                <TechStackImg src={PythonI} type='image/jpg' /> 
                <TechStackImg src={JavascriptI} type='image/jpg' />  
                <TechStackImg src={DjangoI} type='image/jpg' />  
                <TechStackImg src={ReactI} type='image/jpg' />  
                <TechStackImg src={FirebaseI} type='image/jpg' />  
                <TechStackImg src={AWSI} type='image/jpg' />  
                <TechStackImg src={HerokuI} type='image/jpg' />  
                <TechStackImg src={MongoI} type='image/jpg' />  
                <TechStackImg src={MatlabI} type='image/jpg' />  
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
            <div style={{marginTop: '33px', marginBottom: '-12px'}}>My Technology Stack</div>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
