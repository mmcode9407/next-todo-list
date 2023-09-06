import HomePage from "@/app/page";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Home Page", () => {
  it("should render Home component", () => {
    render(<HomePage />);

    expect(screen.getByTestId("home-component")).toBeInTheDocument();
  });
});
