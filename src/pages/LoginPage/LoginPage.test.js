import { screen } from "@testing-library/react";
import userContext from "../../contexts/userContext";
import { renderInBocata } from "../../setupTests";
import LoginPage from "./LoginPage";

describe("Given LoginPage", () => {
  describe("When it's instanciated", () => {
    test("Then it should render the heading 'Socialmedia' and the loginForm", () => {
      const expectedText = "Socialmedia";

      const loginUser = () => {};

      renderInBocata(
        <userContext.Provider value={{ fakeLogin: loginUser }}>
          <LoginPage />
        </userContext.Provider>
      );

      const heading = screen.getByRole("heading", { name: expectedText });
      const loginForm = screen.getByTestId("loginForm");

      expect(heading).toBeInTheDocument();
      expect(loginForm).toBeInTheDocument();
    });
  });
});
