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
  padding: 16px;
`;

const MessagesTag = styled.h2`
  margin: 0;
  font-size: 32px;
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
    <li key={user.id.toString()}>
      <img src={user.userImage} />
      {user.name}
      <p>user.message</p>
    </li>
  );
});

class ChatUserList extends React.Component {
  render() {
    return (
      <ChatUserListContainer data-testid={this.props.testId}>
        <MessagesTag>Messages</MessagesTag>
        <ul>{ListItem}</ul>
      </ChatUserListContainer>
    );
  }
}

export default ChatUserList;
