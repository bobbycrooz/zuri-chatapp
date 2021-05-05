import React from "react";

import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background: white;
`;
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
`;



const SignIn = ({ firebase, auth }) => {

  function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <Container>
      <Button onClick={signInWithGoogle}>Sign in with Google</Button>
    </Container>
  );
};

export default SignIn;
