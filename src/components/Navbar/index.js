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
                        <NavLinks to='mission' smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                            About
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='services' smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                            Services
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='discover' smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                            Discover
                        </NavLinks>
                    </NavItem>
                        <NavBtn>
                            <NavBtnLink to='/login' style={{background: 'black', border: '#fff solid 1px', borderRadius: '5px', marginRight: '6px'}}>
                                Sign in
                            </NavBtnLink>
                        </NavBtn>
                        <NavBtn>
                            <NavBtnLink to='/register' >Create account</NavBtnLink>
                        </NavBtn> 
                </NavMenu>
            </NavbarContainer>
        </Nav>
    </IconContext.Provider>
    </>
  )
}

export default Navbar