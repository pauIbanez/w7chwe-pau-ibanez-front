import { screen } from "@testing-library/react";
import userContext from "../../contexts/userContext";
import { renderInBocata } from "../../setupTests";
import LoginForm from "./LoginForm";
import userEvent from "@testing-library/user-event";

describe("Given LoginForm", () => {
  describe("When it's intanciated", () => {
    test("Then it should render 2 inputs and a button", () => {
      const loginUser = () => {};

      renderInBocata(
        <userContext.Provider value={{ loginUser }}>
          <LoginForm />
        </userContext.Provider>
      );

      const usernameInput = screen.getByLabelText("Username");
      const passwordInput = screen.getByLabelText("Password");
      const submitButton = screen.getByRole("button", { name: "Log In" });

      expect(usernameInput).toBeInTheDocument();
      expect(passwordInput).toBeInTheDocument();
      expect(submitButton).toBeInTheDocument();
    });
  });

  describe("When a user types", () => {
    test("Then it should undisable the button", () => {
      const loginUser = () => {};

      renderInBocata(
        <userContext.Provider value={{ loginUser }}>
          <LoginForm />
        </userContext.Provider>
      );

      const usernameInput = screen.getByLabelText("Username");
      const passwordInput = screen.getByLabelText("Password");
      const submitButton = screen.getByRole("button", { name: "Log In" });

      expect(submitButton).toBeDisabled();

      userEvent.type(usernameInput, "el");
      userEvent.type(passwordInput, "pablo");

      expect(submitButton).not.toBeDisabled();
    });
  });

  describe("When a user submits", () => {
    test("Then it should call loginUser and then redirect or fail, and if so, show the errors", () => {
      const loginUser = jest.fn().mockImplementation((data, cb) => {
        cb();
      });

      const expectedFormData = {
        username: "el",
        password: "pablo",
      };

      const errorText =
        "The username or password provided do not match a registered account";

      renderInBocata(
        <userContext.Provider value={{ loginUser }}>
          <LoginForm />
        </userContext.Provider>
      );

      const usernameInput = screen.getByLabelText("Username");
      const passwordInput = screen.getByLabelText("Password");
      const submitButton = screen.getByRole("button", { name: "Log In" });
      let errorMessage = screen.queryByText(errorText);

      expect(errorMessage).not.toBeInTheDocument();
      userEvent.type(usernameInput, "el");
      userEvent.type(passwordInput, "pablo");
      userEvent.click(submitButton);

      expect(loginUser).toHaveBeenCalledWith(
        expectedFormData,
        expect.any(Function)
      );

      errorMessage = screen.queryByText(errorText);
      expect(errorMessage).toBeInTheDocument();
    });

    test("Then it should display the loading thingy", async () => {
      const secconds = (secconds) =>
        new Promise((resolve) =>
          setTimeout(() => {
            resolve();
          }, secconds * 1000)
        );

      const loginUser = jest.fn().mockImplementation(async (data, cb) => {
        await secconds(1);
        cb();
      });

      renderInBocata(
        <userContext.Provider value={{ loginUser }}>
          <LoginForm />
        </userContext.Provider>
      );

      const usernameInput = screen.getByLabelText("Username");
      const passwordInput = screen.getByLabelText("Password");
      const submitButton = screen.getByRole("button", { name: "Log In" });

      userEvent.type(usernameInput, "el");
      userEvent.type(passwordInput, "pablo");
      userEvent.click(submitButton);
      const loadingThungy = screen.getByTestId("loader");

      expect(loadingThungy).toBeInTheDocument();
      await secconds(2);

      expect(loadingThungy).not.toBeInTheDocument();
    });
  });
});
