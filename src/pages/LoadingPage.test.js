import { render, screen } from "@testing-library/react";
import LoadingPage from "./LoadingPage";

describe("Given LoadingPage", () => {
  describe("When it's instanciated", () => {
    test("Then it should render a loader thingy", () => {
      render(<LoadingPage />);

      const loader = screen.getByTestId("loader");

      expect(loader).toBeInTheDocument();
    });
  });
});
