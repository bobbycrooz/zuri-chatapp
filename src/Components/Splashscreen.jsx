import React from 'react'
import logo from '../Assets/logos/soundcourselogo.png'
import Styled from 'styled-components'

const SplashScreenContainer = Styled.div`
 postion:fixed;
 top: 0;
 left:0;
 width:100%;
 height:100vh;
 display:flex;
 justify-content:center;
 align-items:center;
 background-color: #fff;
`
const SplashScreenLogo = Styled.img`
width:183.16px;
height:60px;
`



const Splashscreen = () => {
    return (
       
            <SplashScreenContainer>
            <SplashScreenLogo src={logo}/>
        </SplashScreenContainer>
       
    )
}

export default Splashscreen
