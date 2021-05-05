import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  padding: 0.8rem 1.4rem;
  text-transform: uppercase;
  background: #2828e4;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 1.3rem;
  font-weight: 600;
  border-radius:0.5rem;
       @media screen and (max-width: 405px) {
          & {
      margin-right:-20px;
  padding: 0.3rem 0.9rem;
  display: none;

          }
        }

`;





// const Component = styled.button``
// const Component = styled.button``
// const Component = styled.button``


const SignOut = ({auth}) => {
  

    return auth.currentUser &&  (
       

            <Button onClick={() => auth.signOut()}>
                logout
            </Button>
            
       
    )
}

export default  SignOut
