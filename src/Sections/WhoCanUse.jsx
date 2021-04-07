import React from 'react'
import Styled from 'styled-components'
import img1 from '../Assets/images/video.png'
import bullet from '../Assets/images/bullet.png'

const WhoContainer = Styled.div`

 width:100%;
 padding:1rem 10rem;
 background-color:#ffffff;
 display:flex;
 justify-content:center;
 align-items:center;
 flex-direction:column;
`
const TitleContainer = Styled.div`
 margin:2rem 0;

 width:100%;
display:flex;
 justify-content:center;
 align-items:center;
 flex-direction:column;
 text-align:center;
 h2{
    font-size:36px;
     
 }
 p{

    font-weight:500;
    line-height:auto;
    color: #2A2A2A;
    font-size:24px;
     width:780px;
     height:72px;
     margin-top:1rem;
     span{
         color:${({theme}) => theme.secondary};
    font-weight:700;

     }
 }
 


`
const ContentContainer = Styled.div`
  width:997px;
 height:429px;
 display:flex;
 justify-content:space-between;
 align-items:center;
margin-top:1rem;

`

const ContentImgContainer = Styled.div`
 width:400px;
 height:360px;
 position:relative;

`
const ContentImg = Styled.img`

 width:100%;
 height:100%;
`
const ContentListContainer = Styled.ul`
 width:470px;
 height:344px;
 position:relative;
 display:flex;
 flex-direction:column;
 justify-content: center;
 align-items:flex-start;

`
const ContentList = Styled.li`
 font-weight:500;
 font-size:32px;
 color:#2A2A2A;
 display:flex;
 justify-content:center;
 align-items:center;
 margin-top:0.5rem;

`
const Tick = Styled.img`
 margin-right:10px;

`


const LevelUpContainer = Styled.div`
 padding:2rem 0;
 background-color:#D6D0FB;
  display:flex;
  flex-direction:column;
 justify-content:center;
 align-items:center;
 h1{

 }

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
 margin-top: 2rem;
&:focus{
    outline:none;
}
display:flex;
 justify-content:center;
 align-items:center;
 text-transform:capitalize;
 &:hover{
     box-shadow: rgba(58, 9, 231, 0.877) 0px 0px 5px 0px;
 }

`



const WhoCanUse = () => {
    return (
        <>
        <WhoContainer>
            <TitleContainer>
                <h2>
                    Who  can use  Soundcourse?
                </h2>
                <p>
                    If you’re ready to take your work to the
                     next level and willing to open your heart
                      to your audience, <span>Soundcourse</span> is for you.
                </p>
            </TitleContainer>
            <ContentContainer>

               <ContentImgContainer>
                   <ContentImg src={img1} alt="beautiful"/>
               </ContentImgContainer>

               <ContentListContainer>
                   <ContentList><Tick src={bullet}/>Drummers</ContentList>
                   <ContentList><Tick src={bullet}/>Pianist</ContentList>
                   <ContentList><Tick src={bullet}/>Saxophonist</ContentList>
                   <ContentList><Tick src={bullet}/>Vocalist</ContentList>
                   <ContentList><Tick src={bullet}/>Music Enthusiast</ContentList>
                   <ContentList><Tick src={bullet}/>Instrumentalists of sorts</ContentList>
               </ContentListContainer>
            </ContentContainer>
            
        </WhoContainer>
        <LevelUpContainer>
            <h1>Ready to level up?</h1>
            <GetStartedBtn>get started</GetStartedBtn>
        </LevelUpContainer>
        </>
    )
}

export default WhoCanUse
