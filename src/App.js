import React from "react";
import { GlobalStyle } from "./Styles/Styles";
import styled,{ ThemeProvider } from "styled-components";
import { defaultTheme } from "./Styles/theme";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import Chatapp from "./Pages/Chatapp";
import Signin from "./Components/SignIn";

firebase.initializeApp({
  apiKey: "AIzaSyDo6S8c9MrwhsWus8hw0nknnZYIOVTOn5c",
  authDomain: "zurichatapp.firebaseapp.com",
  projectId: "zurichatapp",
  storageBucket: "zurichatapp.appspot.com",
  messagingSenderId: "79532942297",
  appId: "1:79532942297:web:8d67c1ca4b060a97a46fc8",
  measurementId: "G-6VQK90KTSE",
});

const auth = firebase.auth();
const firestore = firebase.firestore();

const App = () => {
  const [user] = useAuthState(auth);

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <AppContainer className="main_container">

      {user ? (
        <Chatapp
          firestore={firestore}
          firebase={firebase}
          auth={auth}
          useCollectionData={useCollectionData}
        />
      ) : (
        <Signin firebase={firebase} auth={auth} />
      )}
      </AppContainer>
    </ThemeProvider>
  );
};

const AppContainer = styled.div`

`


export default App;
