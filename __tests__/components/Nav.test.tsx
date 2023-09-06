import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Nav from "@/components/Nav";

describe("Nav", () => {
  it("should render nav items correctly", async () => {
    render(<Nav />);

    const homeLink = screen.getByRole("link", { name: /Home/i });
    const createTaskLink = screen.getByRole("link", { name: /Create Task!/i });

    expect(homeLink).toBeInTheDocument();
    expect(createTaskLink).toBeInTheDocument();
  });
});
