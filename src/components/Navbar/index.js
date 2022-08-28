import React, {useState, useEffect} from 'react'
import { FaBars } from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements'
import {IconContext} from 'react-icons/lib'
import {animateScroll as scroll} from 'react-scroll'

const Navbar = () => {
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
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
                        <NavLinks to='projsect' smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                            Projects
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='experience' smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                            Experience
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='blog' smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                            Blog
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