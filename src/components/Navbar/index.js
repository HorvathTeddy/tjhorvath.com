import React, {useState, useEffect} from 'react'
import { FaBars } from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements'
import {IconContext} from 'react-icons/lib'
import {animateScroll as scroll} from 'react-scroll'
import Selfie from '../../images/selfie.png'

const Navbar = ({ toggle }) => {

  const [scrollNav, setScrollNav] = useState(false)
    
    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop()
    }
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav scrollNav={scrollNav}> 
            <NavbarContainer>
                <img className='selfie-img' src={Selfie} style={{ width: '66px', height: '66px', border: '2px solid #fff', borderRadius: '50%', position: 'sticky', alignItems: 'center', justifyContent: 'center', display: 'flex'}}></img>
                <NavLogo to='/' onClick={toggleHome}>
                    Teddy Horvath
                </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='about' smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                            About Me
                        </NavLinks >
                    </NavItem>
                    <NavItem>
                        <NavLinks to='projects' smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                            Projects
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='experience' smooth={true} duration={500} spy={true} exact='false' offset={-80}>
                            Experience
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='contact' smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                            Contact
                        </NavLinks>
                    </NavItem>
      
                </NavMenu>
            </NavbarContainer>
        </Nav>
    </IconContext.Provider>
    </>
  )
}

export default Navbar