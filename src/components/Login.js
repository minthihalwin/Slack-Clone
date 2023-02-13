import { Button } from "@mui/material";
import { getAuth, signInWithPopup } from "firebase/auth";
import React from "react";
import styled from "styled-components";
import { provider } from "../util/firebase_controller";

function Login() {
  const signIn = (e) => {
    e.preventDefault();
    const auth = getAuth();
    signInWithPopup(auth, provider).catch((error) => alert(error.message))
  };
  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img
          src="https://pbs.twimg.com/profile_images/1085629672891674624/7uSLcxX6_400x400.jpg"
          alt=""
        />
        <h1>Sign in to the Min Thiha</h1>
        <p>min.slack.com</p>

        <Button onClick={signIn}>Sign in with Google</Button>
      </LoginInnerContainer>
    </LoginContainer>
  );
}

export default Login;

const LoginContainer = styled.div`
  background-color: #f8f8f8;
  height: 100vh;
  display: grid;
  place-items: center;
`;
const LoginInnerContainer = styled.div`
  padding: 100px;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  > img {
    object-fit: contain;
    height: 100px;
    margin-bottom: 40px;
  }
  > Button {
    cursor: pointer;
    margin-top: 50px;
    text-transform: inherit !important;
    background-color: #0a8d48;
    color: white;

    :hover {
      background-color: #0a8d48;
      opacity: 0.8;
    }
  }
`;
