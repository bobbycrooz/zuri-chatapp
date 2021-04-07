import React from 'react'
import Styled from 'styled-components'
import img1 from '../Assets/images/man1.png'
import img2 from '../Assets/images/man2.png'
import img3 from '../Assets/images/man3.png'

const DetailsContainer = Styled.div`
 width:100%;
 padding:1rem 10rem;
 background-color:${({theme}) => theme.secondaryLite};
 display:flex;
 justify-content:center;
 align-items:center;
 flex-direction:column;

`
const Detailshead = Styled.div`
margin:2rem 0;

 width:100%;
display:flex;
 justify-content:center;
 align-items:center;
 flex-direction:column;
 text-align:center;
 h2{
     
 }
 p{
    font-weight:400;
    line-height:auto;
    color: #2A2A2A;
    font-size:20px;
     width:896px;
     height:120px;
     margin-top:1rem;
     span{
         color:${({theme}) => theme.secondary};
    font-weight:700;

     }
 }
 

`
const ExploreContainer = Styled.div`
 width:997px;
 height:329px;
 display:flex;
 flex-direction:${({rev}) => rev ? 'row-reverse' : 'row'};
 justify-content:space-between;
 align-items:flex-start;
margin-top:2rem;

`
const ExploreDetails = Styled.div`
 width:500px;
  h2{

 width:456px;
 font-weight:700;


 }
 p{
 width:326px;
 margin-top:2rem;
 line-height:24px;

 }
 
 

`

const ExploreImg = Styled.img`
 width:450px;
 height:320px;

`

const ExploreArr = [
    {
        title:'Take your Sound to the next level.',
        body:'The best is not enough, experience ,collaborate and be part of a community. ',
        image:img1,
        rev:false
    },
    {
        title:'Build a direct and meaningful connection with your digital audience.',
        body:'Share your story and engage your audience  with  contents that creates a connection.',
        image:img2,
        rev:true

    },
    {
        title:'Develop a recurring income stream.',
        body:' Become an Instructor on Soundcourse and earn from teaching others.',
        image:img3,
        rev:false

    },
]

const ExploreCard = ({title, body, img, rev})=> {
    return(
        <ExploreContainer rev={rev}>
            <ExploreDetails>
                <h2>{title}</h2>
                <p>{body}</p>
            </ExploreDetails>
            <ExploreImg src={img}/>
        </ExploreContainer>
    )
}


const Fewdetails = () => {
    return (
        <DetailsContainer>
            <Detailshead>
                <h2>
                    What's SoundCourse?
                </h2>
                <p>
                    <span>Soundcourse</span> lets you upload your Musical  
                    contents as an instrumentalist and Muscian.  
                    It also empowers you to share your musical
                    journey and experience with followers, and 
                    the opporturnity of learning from best 
                    Educators who have a vast knowledge about any instrument.
                </p>
            </Detailshead>
            {
                ExploreArr.map((content) => (
                    <ExploreCard title={content.title} body={content.body} img={content.image} rev={content.rev}/>
                ))
            }
        </DetailsContainer>
    )
}

export default Fewdetails
