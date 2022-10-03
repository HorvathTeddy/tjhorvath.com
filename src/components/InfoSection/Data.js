import CI from '../../images/CI.jpg'
//import selfie from '../../images/selfie.png'
import MIH from '../../images/IMG_0335\ 2.jpeg'
import sbux from '../../images/sbux.jpg'
import coaches from '../../images/coaches.jpeg'
import elders from '../../images/elders.jpg'
import aceni from '../../images/aceni.jpg'

export const homeObjOne = 
{
    id: 'about',
    topLine: 'learn a little bit about me',
    headLine: 'My name is Teddy Horvath and I am dedicated to writing effective and impactful code.',
    description: 'I am a 21 year old from Orange County, CA currently attending Cal Poly Humboldt.  I have been programming ever since I joined college in 2019 and I absolutely love it. My goal is to change as many people\'s lives as I can with software.',
    description2: 'Besides my adoration for all things technology, I also love swimming in the cold ocean, hiking in thick forests, and connecting with friends through a good conversation.',
    alt: 'Coffee',
    imgStart: true,
    img: MIH,  
    btnContent: 'Check out my projects',
    to: 'projects'
}

export const homeObjTwo = 
{
    id: 'experience',
    topLine: 'My Experience',
    headLine: 'Starbucks Coffee Company Barista',
    description: 'Adapted to a fast paced environment to take orders and provide quality customer service.',
    description2: 'Cultivated a team environment that ultimately led to promotion to supervisor.',
    alt: 'link',
    imgStart: false,
    img: sbux, 
    btnContent: 'More Experience - Swim Coach',
    to: 'experience2'
}

export const homeObjThree = 
{
    id: 'experience2',
    topLine: '',
    headLine: 'Swim League Coach',
    description: 'Coordinated and oversaw training and competitions for swimmers ages 6-12.',
    description2: 'Developed the ability to observe and determine work ethics within a team setting.',
    alt: 'link',
    imgStart: true,
    img: coaches, 
    btnContent: 'More Experience - Senior Care',
    to: 'experience3'
}

export const homeObjFour = 
{
    id: 'experience3',
    topLine: '',
    headLine: 'Senior Citizen Technological Support',
    description: 'Generated various programs to assist with tasks, such as medicine tracking.',
    description2: 'Mentored and advised on how to use everyday technological items.',
    alt: 'link', 
    imgStart: false,
    img: elders, 
    btnContent: 'Top Of Experience',
    to: 'experience'
}

export const homeObjFive = 
{
    id: 'contact',
    topLine: 'Contact Me',
    headLine: 'teddyhorvath@gmail.com',
    description: '949.278.2418',
    description2: 'Los Angeles, California',
    alt: 'link',
    imgStart: true,
    img: aceni, 
    btnContent: 'Back To Top',
    to: 'home'
}



