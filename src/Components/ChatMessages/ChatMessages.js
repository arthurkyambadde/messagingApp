import React from "react";
import styled from "styled-components";
import ReturnArrow from "../Icons/ReturnArrow";
import SendMessageArrow from "../Icons/SendMessageArrow";
import SettingsIcon from "../Icons/SettingsIcon";
import { ThemeContext } from "../../Context/Theme";

const ChatContainer = styled.div`
  height: 450px;
  width: 250px;
  border: 1px solid #fff;
  border-radius: 8px;
  position: relative;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
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

const MessagesContainer = styled.div`
  padding: 15px;
`;

class ChatMessages extends React.Component {
  static contextType = ThemeContext;

  render() {
    const { toggleTheme } = this.props;

    return (
      <ChatContainer theme={this.context}>
        <ChatMessageHeader>
          <ReturnArrow />
          <div>Respondents Name</div>
          <SettingsIcon onClick={toggleTheme} />
        </ChatMessageHeader>
        <MessagesContainer>Space for chats</MessagesContainer>

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
