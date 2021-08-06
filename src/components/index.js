import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements';

 
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <h1>Logo</h1>
                </NavLink>
                    <Bars/>
                <NavMenu>
                    <NavLink to="/about" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to="/services" activeStyle>
                        Sobre nós
                    </NavLink>
                    <NavLink to="/contact-us" activeStyle>
                        Blog
                    </NavLink>
                    <NavLink to="/sign-up" activeStyle>
                        Contatos
                    </NavLink>
                    <NavLink to="/ajuda" activeStyle>
                        Ajuda
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/signin">Login</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    )
}

export default Navbar