import React from 'react'
import Styled from 'styled-components'
import Navbar from '../Components/Navbar'
import img1 from '../Assets/images/video.png'
import playbtn from '../Assets/images/playbtn.png'




const HeaderContainer = Styled.div`
 /* border:1px solid red; */
 width:100%;
 height:85vh;
 z-index:4;
display:flex;
 align-items:center;
 justify-content:center;


 
 

`
const HeaderContent = Styled.div`
 margin-top:90px;
 width:70%;
 /* height:; */
display:flex;
 align-items:center;
 justify-content:space-between;

 /* padding:10rem; */


 

`
const HeaderTextContainer = Styled.div`
 width:565px;
display:flex;
flex-direction:column;
 justify-content:space-between;
 align-items:space-between;
 margin-top:-4rem;


h1{

}
h5{
 margin-top: 2.5rem;
 margin-left:0.2rem;

}

 

`
const HeaderImgContainer = Styled.div`
 width:400px;
 height:344px;
 position:relative;
`
const HeaderImg = Styled.img`

 /* width:400px;
 height:344px; */
`
const Playbtn = Styled.img`
position:absolute;
top:50%;
left:50%;
transform: translate(-50%, -50%);
cursor:pointer;
 /* width:400px;
 height:344px; */
`
const GetStartedBtn = Styled.button`
 border:1px solid ${({theme}) => theme.secondary};
 background-color: ${({theme}) => theme.secondary};
 color:white;
 border-radius:40px;
 width:161px;
 height:40px;
 font-weight:500;
 line-height:134.8%;
 cursor:pointer;
 margin-top: 2.5rem;

display:flex;
 justify-content:center;
 align-items:center;
 text-transform:capitalize;
 &:hover{
     box-shadow: rgba(58, 9, 231, 0.877) 0px 0px 5px 0px;
 }

`



const Header = () => {
    return (
        <>
            <Navbar/>

                <HeaderContainer>
            <HeaderContent>
                <HeaderTextContainer>
                    <h1>
                        Change the way your musical content is valued.
                    </h1>
                    <h5>
                        Learn.Play.Connect
                    </h5>
                    <GetStartedBtn>
                        get started
                    </GetStartedBtn>
                </HeaderTextContainer>

                    <HeaderImgContainer>
                        <HeaderImg src={img1}/>
                        <Playbtn src={playbtn}/>
                    </HeaderImgContainer>
                

                
            </HeaderContent>
                    
                </HeaderContainer>
        </>
    )
}

export default Header


// display:flex;
//  justify-content:center;
//  align-items:center;