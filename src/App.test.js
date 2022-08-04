import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Tests for the App component", () => {
  test("App components succesfully renders", () => {
    render(<App />);

    const container = screen.getByTestId("app_container");
    expect(container).toBeInTheDocument();
  });

  test("Test that the chatUser_List component will succesfuly be rendered into the app container", () => {
    render(<App />);
    const chatUserList = screen.getByTestId("chatUser_List");
    expect(chatUserList).toBeInTheDocument();
  });
});
