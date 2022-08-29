import styled from 'styled-components'
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'

export const HeroContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;

    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%),
        linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
        z-index: 2;
    }

`

export const HeroBg = styled.div`
    position: relative;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const VideoBg = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: cover; 
    object-fit: cover;
    position: relative;
    z-index: 0;

`

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute; 
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 33px;
    padding-top: 33px;
    padding-bottom: 20px;
`

export const HeroH1 = styled.div`
    color: #fff;
    font-size: 48px;
    text-align: center;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    transform-origin: bottom;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }

    &:hover
    {
        transform: scale(1.1);
        animation-name: bounce;
        animation-timing-function: ease;
        @keyframes bounce 
        {
            0%   { transform: translateY(0); }
            50%  { transform: translateY(-25px); }
            100% { transform: translateY(0); }
        }
    }
`



export const HeroP = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    transform-origin: bottom;

    @media screen and (max-width: 768px) {
        font-size: 24px;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }

    &:hover
    {
        transform: scale(1.05);
        animation-name: bounce;
        animation-timing-function: ease;
        @keyframes bounce {
            0%   { transform: translateY(0); }
            50%  { transform: translateY(-25px); }
            100% { transform: translateY(0); }
}
    }
`

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`

export const SelfieContainer = styled.div`
    width: 100px;
    display: inline-flex;

`

export const SelfieImg = styled.img`
    margin: auto 5px;
    float: left;
    width: 150px;
    height: 38px;
`

export const TechStackContainer = styled.div`
    width: 500px;
    height: 300px;
    position: absolute; 
    display: grid;
    grid-gap: 12px;
    padding: 10px;
    color: #fff;
 

`

export const TechStack = styled.div`
    width: auto;
    margin: auto;
    position: absolute sticky;
    text-align: center;
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-gap: 10px;
    padding: 10px;
    padding-top: 325px;
`

export const TechStackImg = styled.img`
    height: 75px;
    width: 75px;
    position: relative;
    z-index: 2;
    background-color: #fff;
    border-radius: 50%;

    &:hover
    {
        transform: scale(1.1);
    }

`



