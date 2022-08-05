import React from "react";
import styled from "styled-components";
import daniealImg from "../../Assets/daniel.jpg";
import denisImg from "../../Assets/denis.jpg";
import jimmyImg from "../../Assets/jimmy.jpg";
import jordanImg from "../../Assets/jordan.jpg";

const ChatUserListContainer = styled.div`
  height: 450px;
  width: 250px;
  border: 1px solid #fff;
  border-radius: 8px;
  /* padding: 16px; */
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

const usersList = [
  {
    id: 1,
    userImage: daniealImg,
    name: "daniel",
    message:
      "The band actually formed in 1997, and they already had two albums and a small but loyal fanbase under their belt. That tiny fanbase got a boost almost instantly when their final",
  },
  {
    id: 2,
    userImage: jordanImg,
    name: "Jordan",
    message:
      "The band actually formed in 1997, and they already had two albums and a small but loyal fanbase under their belt. That tiny fanbase got a boost almost instantly when their final",
  },
  {
    id: 3,
    userImage: jimmyImg,
    name: "Jimmy",
    message:
      "The band actually formed in 1997, and they already had two albums and a small but loyal fanbase under their belt. That tiny fanbase got a boost almost instantly when their final",
  },
  {
    id: 4,
    userImage: denisImg,
    name: "Denis",
    message:
      "The band actually formed in 1997, and they already had two albums and a small but loyal fanbase under their belt. That tiny fanbase got a boost almost instantly when their final",
  },
];

const ListItem = usersList.map((user) => {
  return (
    <UserListItem key={user.id.toString()}>
      <UserImage src={user.userImage} />
      <UserDetails>
        <UserName>{user.name}</UserName>
        <UserMessages>
          {user.message.slice(0, 30).concat("........")}
        </UserMessages>
      </UserDetails>
    </UserListItem>
  );
});

class ChatUserList extends React.Component {
  render() {
    return (
      <ChatUserListContainer data-testid={this.props.testId}>
        <MessagesTag>Messages</MessagesTag>
        <UserListContainer>{ListItem}</UserListContainer>
      </ChatUserListContainer>
    );
  }
}

export default ChatUserList;
