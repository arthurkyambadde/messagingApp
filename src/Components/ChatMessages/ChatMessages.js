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
`;

class ChatMessages extends React.Component {
  render() {
    return (
      <ChatContainer>
        <div>
          <ReturnArrow />
          <div>Active chat Respondents Name</div>
          <SettingsIcon />
        </div>
        <div>Space for chats</div>
        <input type="text" placeholder="Type A Message" />
        <SendMessageArrow />
        <div></div>
      </ChatContainer>
    );
  }
}

export default ChatMessages;
