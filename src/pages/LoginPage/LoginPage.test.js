import { screen } from "@testing-library/react";
import { renderInBocata } from "../../setupTests";
import LoginPage from "./LoginPage";

describe("Given LoginPage", () => {
  describe("When it's instanciated", () => {
    test("Then it should render the heading 'Socialmedia' and the loginForm", () => {
      const expectedText = "Socialmedia";

      renderInBocata(<LoginPage />);

      const heading = screen.getByRole("heading", { name: expectedText });
      const loginForm = screen.getByTestId("loginForm");

      expect(heading).toBeInTheDocument();
      expect(loginForm).toBeInTheDocument();
    });
  });
});
