import React from 'react'
import styled from 'styled-components'




const Container = styled.div`

    width:100%;
display:flex;
align-items:center;
justify-content:${(({messageClass}) => messageClass === "send" ? "flex-end" : "flex-start")};
div.text{
display:flex;
flex-direction:${(({messageClass}) => messageClass === "send" ? "row-reverse" : "row")};
align-items:center;
    margin:0 1rem;

}
img{
    width:35px;
    height:35px;
    border-radius:50%;
}
p{
background-color:#f3f2f2;
padding:0.2rem 0.5rem;
border-radius:10px;
margin:0 0.3rem;

}

`




// const Component = styled.button``
// const Component = styled.button``
// const Component = styled.button``



const Chatmessage = ({message, auth, photoURL}) => {

const messageClass = message.uid === auth.currentUser.uid ? 'send' : 'recieved';

    return (
        <Container messageClass={messageClass}>
            <div className="text">

            <img src={photoURL} alt="avatar"/>
            <p className="chat_text">
                {
                    message.text
                }
            </p>
            </div>
        </Container>
    )
}

export default Chatmessage
