import React from "react";
import styled from "styled-components";
import { ThemeContext } from "../../Context/Theme";
import { daniel, jimmy, denis, jordan } from "../../utilities/ChatFriends";
const ChatUserListContainer = styled.div`
  height: 450px;
  width: 250px;
  border: 1px solid #fff;
  border-radius: 8px;
  padding: 0px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
`;

const MessagesTag = styled.h2`
  margin: 0;
  font-size: 32px;
  padding: 16px;
`;

const UserListItem = styled.li`
  list-style: none;
  margin: 0;
  display: flex;
  gap: 20px;
  border-top: 1px solid #777;
  padding: 10px;
  &:last-child {
    border-bottom: 1px solid #777;
  }
`;

const UserListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  /* gap: 20px; */
  padding: 0px;
`;

const UserImage = styled.img`
  min-width: 50px;
  max-width: 70px;
  height: 50px;
  border-radius: 50%;
  border: 3px solid #fff;
  background-color: #fff;
`;

const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 5px;
`;

const UserName = styled.span`
  font-size: 16px;
  text-transform: capitalize;
  font-weight: 800;
  letter-spacing: 1.3px;
`;

const UserMessages = styled.p`
  font-size: 10px;
  margin: 0;
`;

const usersList = [daniel, jordan, denis, jimmy];

const ListItem = usersList.map((user) => {
  return (
    <UserListItem key={user.id.toString()}>
      <UserImage src={user.userImage} />
      <UserDetails>
        <UserName>{user.name}</UserName>
        <UserMessages>
          {user.message.to[0].slice(0, 30).concat("........")}
        </UserMessages>
      </UserDetails>
    </UserListItem>
  );
});

class ChatUserList extends React.Component {
  static contextType = ThemeContext;

  render() {
    console.log(this.context);

    return (
      <ChatUserListContainer
        theme={this.context}
        data-testid={this.props.testId}
      >
        <MessagesTag>Messages</MessagesTag>
        <UserListContainer>{ListItem}</UserListContainer>
      </ChatUserListContainer>
    );
  }
}

export default ChatUserList;
