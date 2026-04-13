import Dashboard from "@/app/dashboard/page";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Dashboard", () => {
  it("renders the dashboard title", () => {
    render(<Dashboard />);
    const title = screen.getByText(/dashboard/i);

    expect(title).toBeInTheDocument();
  });
});
