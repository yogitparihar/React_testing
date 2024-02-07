import { render, screen } from "@testing-library/react";
import { QueryByRole } from "./QueryByRole";

//queryByRole - it is use for checking when element is not present in the dom
describe("testing login functionality", () => {
  test("testing login button rendering", () => {
    render(<QueryByRole />);
    const loginButton = screen.queryByRole("button", { name: "Login" });
    expect(loginButton).toBeInTheDocument();
  });

  test("testing start login button rendering", () => {
    render(<QueryByRole />);
    const startLoginButton = screen.queryByRole("button", {
      name: "Start Login",
    });
    expect(startLoginButton).not.toBeInTheDocument();
  });
});
