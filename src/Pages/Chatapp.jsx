import React, { useState, useRef } from "react";
import styled from "styled-components";

import Chatmessage from "../Components/Chatmessage";
import SignOut from "../Components/SignOut";

const MainApp = styled.div`
  width: 100%;
  height: 100%;
`;
const Navbar = styled.div`
  width: 500px;
  height: 10vh;
  background: #534af1;
  padding: 0.7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position:fixed;
  top:0;
  div.logo {
    font-size: 2rem;
    font-weight: 600;
    color: white;
    letter-spacing: 4px;
  }
  div.space {
    display: none;
    width: 40px;
  }

  /* responsiveness */
  @media screen and (max-width: 500px) {
    & {
      width: 100%;
      justify-content: space-around;

      div.logo {
      }
      div.space {
        display: block;
        @media screen and (max-width: 405px) {
          & {
            display: block;
    width: 40px;


          }
        }
      }
    }
  }

 
`;
const Section = styled.section`
  background: #06aac7;
  width:500px;
  overflow-y: scroll;
  margin-top:10vh;
  padding:0.5rem;
  height: calc(100% - 8vh);
  background-color: #0099ff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 900'%3E%3Cdefs%3E%3CradialGradient id='a' cx='800' cy='371' r='70%25' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%230099ff'/%3E%3Cstop offset='1' stop-color='%2304C'/%3E%3C/radialGradient%3E%3CradialGradient id='b' cx='800' cy='371' r='60%25' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%230EF' stop-opacity='1'/%3E%3Cstop offset='1' stop-color='%230EF' stop-opacity='0'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='1600' height='900'/%3E%3Cg fill='none' stroke='%2303E' stroke-width='1.4' stroke-miterlimit='10' stroke-opacity='.5'%3E%3Cpolygon points='2277.4 1152 800-1407-677.4 1152'/%3E%3Cpolygon points='800-1372.9-648.8 1136.5 2248.8 1136.5'/%3E%3Cpolygon points='800-1338.8-620.2 1121.1 2220.2 1121.1'/%3E%3Cpolygon points='800-1304.7-591.6 1105.6 2191.6 1105.6'/%3E%3Cpolygon points='800-1270.6-563 1090.2 2163 1090.2'/%3E%3Cpolygon points='800-1236.5-534.4 1074.7 2134.4 1074.7'/%3E%3Cpolygon points='800-1202.4-505.8 1059.3 2105.8 1059.3'/%3E%3Cpolygon points='800-1168.3-477.2 1043.8 2077.2 1043.8'/%3E%3Cpolygon points='800-1134.2-448.6 1028.4 2048.6 1028.4'/%3E%3Cpolygon points='800-1100.1-420 1012.9 2020 1012.9'/%3E%3Cpolygon points='800-1066-391.4 997.5 1991.4 997.5'/%3E%3Cpolygon points='800-1031.9-362.7 982 1962.7 982'/%3E%3Cpolygon points='800-997.8-334.1 966.6 1934.1 966.6'/%3E%3Cpolygon points='800-963.7-305.5 951.1 1905.5 951.1'/%3E%3Cpolygon points='800-929.6-276.9 935.7 1876.9 935.7'/%3E%3Cpolygon points='800-895.5-248.3 920.2 1848.3 920.2'/%3E%3Cpolygon points='800-861.4-219.7 904.7 1819.7 904.7'/%3E%3Cpolygon points='800-827.3-191.1 889.3 1791.1 889.3'/%3E%3Cpolygon points='800-793.2-162.5 873.8 1762.5 873.8'/%3E%3Cpolygon points='800-759.1-133.9 858.4 1733.9 858.4'/%3E%3Cpolygon points='800-725-105.3 842.9 1705.3 842.9'/%3E%3Cpolygon points='800-690.9-76.7 827.5 1676.7 827.5'/%3E%3Cpolygon points='800-656.8-48.1 812 1648.1 812'/%3E%3Cpolygon points='800-622.7-19.4 796.6 1619.4 796.6'/%3E%3Cpolygon points='800-588.6 9.2 781.1 1590.8 781.1'/%3E%3Cpolygon points='800-554.5 37.8 765.7 1562.2 765.7'/%3E%3Cpolygon points='800-520.5 66.4 750.2 1533.6 750.2'/%3E%3Cpolygon points='800-486.4 95 734.8 1505 734.8'/%3E%3Cpolygon points='800-452.3 123.6 719.3 1476.4 719.3'/%3E%3Cpolygon points='800-418.2 152.2 703.9 1447.8 703.9'/%3E%3Cpolygon points='800-384.1 180.8 688.4 1419.2 688.4'/%3E%3Cpolygon points='800-350 209.4 673 1390.6 673'/%3E%3Cpolygon points='800-315.9 238 657.5 1362 657.5'/%3E%3Cpolygon points='800-281.8 266.6 642 1333.4 642'/%3E%3Cpolygon points='800-247.7 295.2 626.6 1304.8 626.6'/%3E%3Cpolygon points='800-213.6 323.9 611.1 1276.1 611.1'/%3E%3Cpolygon points='800-179.5 352.5 595.7 1247.5 595.7'/%3E%3Cpolygon points='800-145.4 381.1 580.2 1218.9 580.2'/%3E%3Cpolygon points='800-111.3 409.7 564.8 1190.3 564.8'/%3E%3Cpolygon points='800-77.2 438.3 549.3 1161.7 549.3'/%3E%3Cpolygon points='800-43.1 466.9 533.9 1133.1 533.9'/%3E%3Cpolygon points='800-9 495.5 518.4 1104.5 518.4'/%3E%3Cpolygon points='800 25.1 524.1 503 1075.9 503'/%3E%3Cpolygon points='800 59.2 552.7 487.5 1047.3 487.5'/%3E%3Cpolygon points='800 93.3 581.3 472.1 1018.7 472.1'/%3E%3Cpolygon points='800 127.4 609.9 456.6 990.1 456.6'/%3E%3Cpolygon points='800 161.5 638.5 441.2 961.5 441.2'/%3E%3Cpolygon points='800 195.6 667.2 425.7 932.8 425.7'/%3E%3Cpolygon points='800 229.7 695.8 410.2 904.2 410.2'/%3E%3Cpolygon points='800 263.8 724.4 394.8 875.6 394.8'/%3E%3Cpolygon points='800 297.9 753 379.3 847 379.3'/%3E%3Cpolygon points='800 332 781.6 363.9 818.4 363.9'/%3E%3C/g%3E%3Crect fill-opacity='.5' fill='url(%23b)' width='1600' height='900'/%3E%3C/svg%3E");
  background-size: cover;
  &::-webkit-scrollbar {
    width: 0.25rem;
  }

  &::-webkit-scrollbar-track {
    background: #0099ff;
  }

  &::-webkit-scrollbar-thumb {
    background: #534af1;
  }
  @media screen and (max-width: 503px) {
    & {
      width: 100%;
  
        display:flex;
        flex-direction:column;
        align-items:center;
      background-attachment: none;
    }
  }
`;

const Form = styled.form`
  width: 500px;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  /* overflow-y:scroll; */
  height: 8vh;
  padding: 0;
  input {
    width: 70%;
    height: 100%;
    border: 1px solid #534af1;
    font-size: 1.5rem;
    color: #1f1f1f;
    padding: 0.5;
    &:focus {
      outline: none;
    }
  }


    @media screen and (max-width: 500px) {
    & {
      width: 100%;
    }
  }
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
  /* border-radius:0.5rem; */
  &:disabled {
    background: #5656d6;
  }
  width: 30%;
  height: 100%;
 
`;

const MobileSignOut = styled.button`
    padding: 0.8rem;
  text-transform: uppercase;
  background: #2828e4;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 1.3rem;
  font-weight: 600;
  border-radius:50%;
  /* border-radius:0.5rem; */
display:flex;
justify-content:center;
align-items:center;
  
  height: 50px;
  width:50px;
      display:none;

 
 @media screen and (max-width: 405px) {
    & {
      display:block;

    }
  }
`




//   @media screen and (max-width: 500px) {
//     & {

//     }
//   }

// const Component = styled.button``
// const Component = styled.button``

// const auth = firebase.auth();

const Chatapp = ({ firestore, useCollectionData, auth, firebase }) => {
  const messageRef = firestore.collection("messages");
  const query = messageRef.orderBy("createdAt").limit(20);
  const dummy = useRef();
  const { uid, photoURL } = auth.currentUser;

  const [message] = useCollectionData(query, { idField: "id" });
  const [formValue, setFormValue] = useState("");

  async function sendMessage(e) {
    e.preventDefault();

    await messageRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });

    console.log(auth.currentUser);
    console.log(message);
    setFormValue("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <MainApp>
      <Navbar className='navbar'>
        <div className='logo'>zuriTalk</div>
        <div className='space'></div>
        <SignOut auth={auth} />
        <MobileSignOut onClick={() => auth.signOut()}>
          <i class="fas fa-sign-out-alt"></i>
        </MobileSignOut>
      </Navbar>

      <Section>
        {message?.map((msg) => (
          <Chatmessage
            message={msg}
            photoURL={msg.photoURL}
            auth={auth}
            key={msg.id}
          />
        ))}

        <span ref={dummy}></span>
      </Section>

      <Form className='form_container' onSubmit={sendMessage}>
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          type='text'
          name=''
          id=''
        />
        <Button type='submit' disabled={!formValue}>
          ???send
        </Button>
      </Form>
    </MainApp>
  );
};

export default Chatapp;
