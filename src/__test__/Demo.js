import { screen } from "@testing-library/react";
import App from "../App";

test("testing img title", () => {
    render(<App />);
    const title = screen.getByTitle(/demo-img/i);
    expect(title).toBeInTheDocument();
});