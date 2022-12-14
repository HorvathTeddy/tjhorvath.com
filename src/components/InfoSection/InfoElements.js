import styled from 'styled-components'

export const InfoContainer = styled.div`
    display: flex;
    position: sticky;
    color: #fff;
    z-index: 0;
    background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%),
        linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`
// info or something
export const InfoWrapper = styled.div`
    display: grid;
    height: 960px;

    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
    `

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => imgStart ? `'col2 col1'` : `'col1 col2'`};

    @media screen and (max-width: 768px){
        grid-template-areas: ${({imgStart}) => imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`}
    }
`

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`
export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`


export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
    position: sticky;
    z-index: 0;
`

export const TopLine = styled.p`
    color: #152238;
    font-size: 36px;
    line-height: auto;
    font-weight: 1000;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 50px;
    position: sticky;
    z-index: 0;
`

export const Heading = styled.h1`
    /* margin: 16px; */
    padding: 12px;
    font-size: 32px;
    line-height: auto;
    font-weight: 75;
    color: #fff;
    position: sticky;
    z-index: 0;
    background: #152238;
    border-radius: 33px;
    height: auto;
    text-align: center;

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }

    &.hover
    {
        transform: scale(1.2)
    }
`

export const Subtitle = styled.p`
    max-width: 440px;
    /* margin: 32px; */
    padding: 12px;
    font-size: 24px;
    line-height: auto;
    color: #fff;
    position: sticky;
    z-index: 0;
    background: #152238;
    border-radius: 50px;
    text-align: center;
`

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0; 
    border: transparent;
    border-radius: 33px;
    
`