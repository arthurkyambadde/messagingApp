import React from "react";
import ChatUserList from "./Components/Chats/ChatUserList";
import styled from "styled-components";
import ChatMessages from "./Components/ChatMessages/ChatMessages";
import { ThemeContext } from "./Context/Theme";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(2, 0, 36, 1) 100%
  );
  color: #fff;
`;

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    return (
      <ThemeContext.Provider>
        <AppContainer data-testid="app_container">
          <ChatUserList testId="chatUser_List" />
          <ChatMessages />
        </AppContainer>
      </ThemeContext.Provider>
    );
  }
}

export default App;
