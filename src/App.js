import React from "react";
import ChatUserList from "./Components/Chats/ChatUserList";
import styled from "styled-components";
import ChatMessages from "./Components/ChatMessages/ChatMessages";
import { ThemeContext, themes } from "./Context/Theme";

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
`;

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      theme: themes.dark,
    };
  }

  toggleTheme = () => {
    this.setState({
      theme: this.state.theme === themes.light ? themes.dark : themes.light,
    });

    console.log("clicked............");
  };

  render() {
    const { theme } = this.state;

    return (
      <ThemeContext.Provider value={theme}>
        <AppContainer data-testid="app_container">
          <ChatUserList testId="chatUser_List" />
          <ChatMessages toggleTheme={this.toggleTheme} />
        </AppContainer>
      </ThemeContext.Provider>
    );
  }
}

export default App;
