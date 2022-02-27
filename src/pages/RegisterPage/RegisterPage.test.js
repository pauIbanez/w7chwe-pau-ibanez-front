import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import userContext from "../../contexts/userContext";
import { renderInBocata } from "../../setupTests";
import RegisterPage from "./RegisterPage";

describe("Given RegisterPage", () => {
  describe("When it's instanciated", () => {
    test("Then it should render the heading 'Socialmedia' and the form", () => {
      const expectedHeading = "Socialmedia";

      const contextValue = {
        registerUser: () => {},
      };

      renderInBocata(
        <userContext.Provider value={contextValue}>
          <RegisterPage />
        </userContext.Provider>
      );

      const form = screen.getByTestId("registerForm");
      const heading = screen.getByRole("heading", { name: expectedHeading });

      expect(form).toBeInTheDocument();
      expect(heading).toBeInTheDocument();
    });
  });

  describe("When it's instanciated, and the user completes the form sucessfully", () => {
    test("Then it should display the text 'Your user has been registered!' and a link", () => {
      const expectedText = "Your user has been registered! Proceed to";
      const expectedSubmit = "Register";
      const expectedButton = "Next";
      const labelsText = ["Name", "Last name", "Username", "Password"];
      const expectedInput = "Upload your avatar";
      const avatar = new File(["hello"], "hello.png", { type: "image/png" });

      URL.createObjectURL = () => "";

      const contextValue = {
        registerUser: jest.fn().mockImplementation((data, cb) => {
          cb(true);
        }),
      };
      renderInBocata(
        <userContext.Provider value={contextValue}>
          <RegisterPage />
        </userContext.Provider>
      );

      let labels = [];

      labelsText.forEach((text) => {
        labels.push(screen.getByLabelText(text));
      });

      const button = screen.getByRole("button", { name: expectedButton });

      labels.forEach((label) => {
        userEvent.type(label, "asdasd");
      });

      userEvent.click(button);

      const avatarInput = screen.getByLabelText(expectedInput);
      const submitButton = screen.getByRole("button", { name: expectedSubmit });

      userEvent.upload(avatarInput, avatar);
      userEvent.click(submitButton);

      expect(contextValue.registerUser).toHaveBeenCalled();

      const text = screen.getByText(expectedText);
      const link = screen.getByRole("link", { name: "Log In" });

      expect(text).toBeInTheDocument();
      expect(link).toBeInTheDocument();
      jest.resetAllMocks();
    });
  });
});
