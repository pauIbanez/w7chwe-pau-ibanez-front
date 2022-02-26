import { render, screen } from "@testing-library/react";
import NotFoundPage from "./NotFoundPage";

describe("Given NotFoundPage", () => {
  describe("When it's rendered", () => {
    test("Then it should render the text 404 and the text 'Page not found!'", () => {
      const expectedCode = "404";
      const expectedInfo = "Page not found!";

      render(<NotFoundPage />);

      const code = screen.getByRole("heading", { name: expectedCode });
      const info = screen.getByRole("heading", { name: expectedInfo });

      expect(code).toBeInTheDocument();
      expect(info).toBeInTheDocument();
    });
  });
});
