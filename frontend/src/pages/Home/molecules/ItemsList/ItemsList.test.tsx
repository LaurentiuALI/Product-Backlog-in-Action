import { render, screen } from "@testing-library/react";
import { describe, it, vi } from "vitest";

import { useNavigate } from "react-router-dom";

import ItemList from ".";

vi.mock("react-router-dom", () => {
  return {
    useNavigate: vi.fn(),
  };
});

vi.mock("react-query", () => {
  return {
    useQuery: vi.fn(() => ({
      isLoading: false,
      error: null,
      data: [
        {
          UID: "Test UID",
          name: "Test Name",
          state: "Test State",
          storyPoints: 1,
        },
        {
          UID: "Test UID",
          name: "Test Name",
          state: "Test State",
          storyPoints: 2,
        },
        {
          UID: "Test UID",
          name: "Test Name",
          state: "Test State",
          storyPoints: 3,
        },
      ],
    })),
  };
});

describe("ItemList", () => {
  it("renders", async () => {
    render(<ItemList />);
    const titleElements = screen.getAllByText(/Test Name/i);
    expect(titleElements.length).toBe(3);

    const storyPointElement1 = screen.getAllByText(/1/i);
    expect(storyPointElement1.length).toBe(1);
    const storyPointElement2 = screen.getAllByText(/2/i);
    expect(storyPointElement2.length).toBe(1);
    const storyPointElement3 = screen.getAllByText(/3/i);
    expect(storyPointElement3.length).toBe(1);

    const stateElements = screen.getAllByText(/Test State/i);
    expect(stateElements.length).toBe(3);

    const uidElements = screen.getAllByText(/Test UID/i);
    expect(uidElements.length).toBe(3);
  });
});
