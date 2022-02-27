import { screen } from "@testing-library/react";
import userContext from "../../contexts/userContext";
import { renderInBocata } from "../../setupTests";
import RegisterForm from "./RegisterForm";
import userEvent from "@testing-library/user-event";

describe("Given RegisterForm", () => {
  describe("When it's instanciated", () => {
    test("Then it should render 4 inputs and a button with text 'Nextr'", () => {
      const expectedButton = "Next";
      const labelsText = ["Name", "Last name", "Username", "Password"];

      const contextValue = {
        registerUser: () => {},
      };
      const onSucess = () => {};

      renderInBocata(
        <userContext.Provider value={contextValue}>
          <RegisterForm onSucess={onSucess} />
        </userContext.Provider>
      );

      let labels = [];

      labelsText.forEach((text) => {
        labels.push(screen.getByLabelText(text));
      });

      const button = screen.getByRole("button", { name: expectedButton });

      labels.forEach((label) => {
        expect(label).toBeInTheDocument();
      });

      expect(button).toBeInTheDocument();
    });
  });

  describe("When the user types and goes to next step", () => {
    test("Then it should render 1 input and a button with text 'Register'", () => {
      const expectedSubmit = "Register";
      const expectedButton = "Next";
      const labelsText = ["Name", "Last name", "Username", "Password"];
      const expectedInput = "Upload your avatar";

      const contextValue = {
        registerUser: () => {},
      };
      const onSucess = () => {};

      renderInBocata(
        <userContext.Provider value={contextValue}>
          <RegisterForm onSucess={onSucess} />
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

      expect(avatarInput).toBeInTheDocument();
      expect(submitButton).toBeInTheDocument();
    });
  });

  describe("When the user completes the from and it's ok", () => {
    test("Then it should call registerUser and then onSuccess", () => {
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
      const onSucess = jest.fn();

      renderInBocata(
        <userContext.Provider value={contextValue}>
          <RegisterForm onSucess={onSucess} />
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
      expect(onSucess).toHaveBeenCalled();

      jest.resetAllMocks();
    });
  });

  describe("When the user completes the from and it's not ok", () => {
    test("Then it should call registerUser and then show the errors", () => {
      const expectedSubmit = "Register";
      const expectedButton = "Next";
      const labelsText = ["Name", "Last name", "Username", "Password"];
      const expectedInput = "Upload your avatar";
      const avatar = new File(["hello"], "hello.png", { type: "image/png" });

      const errorMessage = "some error";
      URL.createObjectURL = () => "asdsaa";

      const contextValue = {
        registerUser: jest.fn().mockImplementation((data, cb) => {
          cb(false, errorMessage);
        }),
      };
      const onSucess = jest.fn();

      renderInBocata(
        <userContext.Provider value={contextValue}>
          <RegisterForm onSucess={onSucess} />
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

      const errorText = screen.getByText(errorMessage);

      expect(contextValue.registerUser).toHaveBeenCalled();
      expect(errorText).toBeInTheDocument();

      jest.resetAllMocks();
    });
  });

  describe("When the user types and goes to next step and then goes back", () => {
    test("Then it should render the initial 4 inputs and a button with text 'Next'", () => {
      const expectedSubmit = "Register";
      const expectedButton = "Next";
      const labelsText = ["Name", "Last name", "Username", "Password"];
      const expectedInput = "Upload your avatar";

      const contextValue = {
        registerUser: () => {},
      };
      const onSucess = () => {};

      renderInBocata(
        <userContext.Provider value={contextValue}>
          <RegisterForm onSucess={onSucess} />
        </userContext.Provider>
      );

      let labels = [];

      labelsText.forEach((text) => {
        labels.push(screen.getByLabelText(text));
      });

      let button = screen.getByRole("button", { name: expectedButton });

      labels.forEach((label) => {
        userEvent.type(label, "asdasd");
      });

      userEvent.click(button);

      const avatarInput = screen.getByLabelText(expectedInput);
      const submitButton = screen.getByRole("button", { name: expectedSubmit });
      const goBackButton = screen.getByText("Go Back");

      expect(avatarInput).toBeInTheDocument();
      expect(submitButton).toBeInTheDocument();

      userEvent.click(goBackButton);

      labels = [];

      labelsText.forEach((text) => {
        labels.push(screen.getByLabelText(text));
      });

      labels.forEach((label) => {
        expect(label).toBeInTheDocument();
      });

      button = screen.getByRole("button", { name: expectedButton });

      expect(button).toBeInTheDocument();
      expect(avatarInput).not.toBeInTheDocument();
      expect(submitButton).not.toBeInTheDocument();
    });
  });

  describe("When the user types and goes to next step and adds and removes avatar", () => {
    test("Then it should display and stop displaying the avatar", () => {
      const expectedButton = "Next";
      const labelsText = ["Name", "Last name", "Username", "Password"];
      const expectedInput = "Upload your avatar";
      URL.createObjectURL = () => "asdsaa";
      const avatar = new File(["hello"], "hello.png", { type: "image/png" });

      const contextValue = {
        registerUser: () => {},
      };
      const onSucess = () => {};

      renderInBocata(
        <userContext.Provider value={contextValue}>
          <RegisterForm onSucess={onSucess} />
        </userContext.Provider>
      );

      let labels = [];

      labelsText.forEach((text) => {
        labels.push(screen.getByLabelText(text));
      });

      let button = screen.getByRole("button", { name: expectedButton });

      labels.forEach((label) => {
        userEvent.type(label, "asdasd");
      });

      userEvent.click(button);

      const avatarInput = screen.getByLabelText(expectedInput);

      userEvent.upload(avatarInput, avatar);

      const avatarPreview = screen.getByRole("img");

      expect(avatarPreview).toBeInTheDocument();

      const removeButton = screen.getByRole("button", { name: "Remove" });

      userEvent.click(removeButton);

      expect(avatarPreview).not.toBeInTheDocument();
    });
  });
});
