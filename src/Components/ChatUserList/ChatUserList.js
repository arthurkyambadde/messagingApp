import React from "react";
import styled from "styled-components";

const ChatUserListContainer = styled.div`
  height: 450px;
  width: 250px;
  border: 1px solid #fff;
  border-radius: 8px;
  padding: 16px;
`;

class ChatUserList extends React.Component {
  render() {
    return (
      <ChatUserListContainer data-testid={this.props.testId}>
        <h2>Messages</h2>
      </ChatUserListContainer>
    );
  }
}

export default ChatUserList;
