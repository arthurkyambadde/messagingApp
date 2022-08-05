import React from "react";
import styled from "styled-components";
import ReturnArrow from "../Icons/ReturnArrow";
import SendMessageArrow from "../Icons/SendMessageArrow";
import SettingsIcon from "../Icons/SettingsIcon";

const ChatContainer = styled.div`
  height: 450px;
  width: 250px;
  border: 1px solid #fff;
  border-radius: 8px;
  position: relative;
`;

const ChatMessageHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #777;
  padding: 16px;
  position: relative;
`;

const NewMessageInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
  position: absolute;
  bottom: 10px;
  width: 100%;
`;

const TextInputArea = styled.input`
  border-radius: 8px;
  height: 25px;
  padding: 4px;
  width: 80%;
`;

class ChatMessages extends React.Component {
  render() {
    return (
      <ChatContainer>
        <ChatMessageHeader>
          <ReturnArrow />
          <div>Respondents Name</div>
          <SettingsIcon />
        </ChatMessageHeader>
        <div>Space for chats</div>

        <NewMessageInfo>
          <TextInputArea type="text" placeholder="Type A Message" />
          <SendMessageArrow />
        </NewMessageInfo>

        <div></div>
      </ChatContainer>
    );
  }
}

export default ChatMessages;
