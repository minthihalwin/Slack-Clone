import { Button } from "@mui/material";
import { serverTimestamp } from "firebase/firestore";
import React, { useState } from "react";
import styled from "styled-components";
import { addMessages } from "../util/firebase_controller";

function ChatInput({ channelName, channelId, chatRef }) {
  const [input, setInput] = useState("");
  const sendMessage = (e) => {
    e.preventDefault();
    console.log(channelId)

    if (!channelId) {
      return false;
    }
    const newMessage = {
      message: input,
      timestamp: serverTimestamp(),
      user: "Min Min",
      userImage:
        "https://avatars.githubusercontent.com/u/109345050?s=400&u=53b34d0cd2c5aee11d3d3509e0a498bfe310eac4&v=4",
    };
    try {
      addMessages(channelId, newMessage);
    } catch (err) {
      alert(err.message);
    }

    chatRef.current.scrollIntoView({
      behavior: "smooth"
    });

    setInput("");
  };
  return (
    <ChatInputContainer>
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message #${channelName}`}
        />
        <Button hidden type="submit" onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </ChatInputContainer>
  );
}

export default ChatInput;

const ChatInputContainer = styled.div`
  border-radius: 20px;

  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }

  > form > input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;
    outline: none;
  }
  > form > button {
    display: none !important;
  }
`;
