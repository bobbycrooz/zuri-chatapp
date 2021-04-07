import React from 'react'
import Styled from 'styled-components'
import logo from '../Assets/logos/soundcourselogo.png'
import fb from '../Assets/logos/fb.png' 
import tw from '../Assets/logos/tw.png'
import ig from '../Assets/logos/ig.png'


const FooterContainer = Styled.div`
 width:100%;
 height:382px;
 display:flex;
 flex-direction:column;

`
const FooterContent = Styled.div`
 color:#fff;
 display:flex;
 background-color:${({theme}) => theme.secondaryDark};

`
const FooterCopyright = Styled.div`
 display:flex;
 justify-content:space-between;
 align-items:center;
 background-color:${({theme}) => theme.textColor};
 height:100px;

`
const FooterContentBox = Styled.div`
 display:flex;
 flex-direction:column;
 justify-content:flex-between;
 align-items:center;
 width:25%;
 padding:1.5rem 5rem;
`
const Select = Styled.select`
    width:239px;
    height:45px;
    background-color: transparent;
    border: 2px solid #fff;
    font-weight:600;
    color:#fff;
    font-size:16px;
    margin-bottom:1rem;
    border-radius:9px;
`
const Option = Styled.option`


`

const List = Styled.ul`
list-style:none;

    li{
        font-size:14px;
font-weight:300;
        line-height:19.3px;
        letter-spacing:-1.5%;
        margin-bottom:0.5rem;
    }



`

const FollowUsCont = Styled.div`
 display:flex;
 justify-content:space-between;
 width:180px;
 color:#fff;
 margin-left:4rem;
    div{
         display:flex;
        justify-content:space-between;
        width:100px;
    }
 

`
const LogoCont = Styled.img`
 display:flex;
 justify-content:center;
 

`
const Copyright = Styled.div`
 display:flex;
 justify-content:center;
 width:250px;
color:#fff;
 margin-right:4rem;


`


const Footer = () => {
    return (
        <FooterContainer>
            <FooterContent>
                <FooterContentBox>
                    <Select name="Language">
                        Language
                        <Option selected>English</Option>
                    </Select>

                    <Select>
                        Country
                        <Option>Nigeria</Option>
                    </Select>

                    <Select>
                        Currency
                        <Option>Naira</Option>
                    </Select>
                </FooterContentBox>
                <FooterContentBox>
                    <List>
                        <li style={{fontWeight:700,fontSize:'16px'}}>
                            Resources
                        </li>
                        <li>Blog</li>
                        <li>Help center</li>
                        <li>FAQ</li>
                        <li>Developers</li>
                        <li>How it works</li>
                    </List>
                </FooterContentBox>
                <FooterContentBox>
                    <List>
                        <li style={{fontWeight:700,fontSize:'16px'}}>
                            Commuinity
                        </li>
                        <li>Featured artists</li>
                        <li>The partials</li>
                        <li>Live Events</li>
                       
                    </List>
                </FooterContentBox>
                <FooterContentBox>
                    <List>
                        <li style={{fontWeight:700,fontSize:'16px'}}>
                            Company
                        </li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>History</li>
                        <li>Privacy</li>
                        <li>Policy</li>
                    </List>
                </FooterContentBox>
            </FooterContent>

            <FooterCopyright>
 
                <FollowUsCont >
                    Follow:
                    <div>
                        <img src={fb} alt="facebook"/>
                        <img src={tw} alt="twitter"/>
                        <img src={ig} alt="instagram"/>
                    </div>
                </FollowUsCont>
                <LogoCont src ={logo}/>
                <Copyright>
                    © 2021 | Sound Course Inc.
                </Copyright>
            </FooterCopyright>

        </FooterContainer>
    )
}

export default Footer
