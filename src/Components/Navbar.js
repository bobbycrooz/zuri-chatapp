import React from 'react'
import Styled from 'styled-components'
import logo from '../Assets/logos/soundcourselogo.png'
import { Link } from 'react-router-dom'


const NavContainer = Styled.div`
 postion:fixed;
 top:0;
 height:100px;
 width:100%;
 display:flex;
 /* flex-grow:1; */
 justify-content:space-around;
 align-items:center;
 box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;

`
const NavLogo = Styled.img`
 width:183.16px;
 height:60px;
 

`
const NavLinkContainer = Styled.ul`
 display:flex;
 align-items:center;
 width:400px;
 height:24px;
 list-style:none;
margin-right:-8rem;


 @media only screen and (max-width:1278px){
     &{
        margin-right:0rem;
         
     }
 }
`
const NavLinks = Styled(Link)`
 height:100%;
 margin-left: 1rem;
 /* padding:1rem; */
 /* width:100%; */
line-height:auto;
font-size:inherit;
display:flex;
 justify-content:center;
 align-items:center;
 text-decoration:none;
 text-transform:capitalize;

 &:hover{}
 &:active{}
 &:visited{}

`

const NavButtonContainer = Styled.div`
 width:289px;
 height:40px;
display:flex;
 justify-content:space-between;
 align-items:center;
`

const NavSpace = Styled.div`
 width:200px;
 height:40px;
 display:block;
 
 @media only screen and (max-width:1000px){
     &{
         display:none;
     }
 }

`

const NavSignBtn = Styled.div`
 border:0.8px solid ${({theme}) => theme.primary};
 border-radius:1rem;
 width:88px;
 height:40px;
 font-weight:500;
 line-height:172.5%;
display:flex;
 justify-content:center;
 align-items:center;
 text-transform:capitalize;
 cursor:pointer;
`
const NavCreateBtn = Styled.div`
 border:1px solid ${({theme}) => theme.secondary};
 background-color: ${({theme}) => theme.secondary};
 color:white;
 border-radius:40px;
 width:161px;
 height:40px;
 font-weight:500;
 line-height:134.8%;
 cursor:pointer;

display:flex;
 justify-content:center;
 align-items:center;
 text-transform:capitalize;

`


const Navbar = () => {
    return (
        <NavContainer>
            <NavLogo src={logo} alt="soundcourse logo"/>
            <NavSpace/>
            <NavLinkContainer>
                <NavLinks style={{width:'120px'}}>How it works</NavLinks>
                <NavLinks>About</NavLinks>
                <NavLinks>Blog</NavLinks>
                <NavLinks>Contact Us</NavLinks>
            </NavLinkContainer>
            <NavButtonContainer>
                <NavSignBtn>sing in</NavSignBtn>
                <NavCreateBtn>Create Account</NavCreateBtn>
            </NavButtonContainer>

        </NavContainer>
    )
}

export default Navbar
