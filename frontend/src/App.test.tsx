import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import SanityCheck from "./SanityCheck";
describe("#vitestAlive", () => {
  it("should be alive", () => {
    expect(1).toBe(1);

    render(<SanityCheck />);
    expect(screen.getByText(/SanityCheck/i)).toBeInTheDocument();
  });
});
