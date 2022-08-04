import React from "react";
import ChatUserList from "./Components/ChatUserList/ChatUserList";
import styled from "styled-components";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

class App extends React.Component {
  render() {
    return (
      <AppContainer class="App">
        <ChatUserList />
      </AppContainer>
    );
  }
}

export default App;
