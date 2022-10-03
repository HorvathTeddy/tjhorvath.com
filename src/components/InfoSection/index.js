import React from 'react'
import { Button } from '../ButtonElements'
import ParticleBackground from '../ParticleBackground'
import {
InfoContainer,
InfoWrapper,
InfoRow,
Column1,
TextWrapper,
TopLine,
Heading,
Subtitle,
BtnWrap,
Column2,
ImgWrap,
Img } from './InfoElements'

const InfoSection = ({img, id, topLine, headLine, description, description2, alt, imgStart, btnContent, to}) => {
  return (
    <>
      <InfoContainer id={id}>
      <ParticleBackground />
        <InfoWrapper>
            <InfoRow imgStart={imgStart}>
                <Column1>
                <TextWrapper>
                    <TopLine>
                        {topLine}
                    </TopLine>
                    <Heading >
                        {headLine}
                    </Heading>
                    <Subtitle >
                        {description}
                    </Subtitle>
                    <Subtitle >
                        {description2}
                    </Subtitle>
                    <BtnWrap>
                        <Button to={to} smooth={true} duration={500} spy={true} exact="true" offset={-80}>
                          {btnContent}
                        </Button>
                    </BtnWrap>
                </TextWrapper>
                </Column1>
                <Column2>
                    <ImgWrap>
                    <Img src={img} alt={alt}/>
                    </ImgWrap>
                </Column2>
            </InfoRow>
        </InfoWrapper>
      </InfoContainer>

    </>
  )
}

export default InfoSection
