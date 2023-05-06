import { render, screen } from "@testing-library/react";
import { describe, it, vi } from "vitest";

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
          state: "Identified",
          storyPoints: 1,
        },
        {
          UID: "Test UID",
          name: "Test Name",
          state: "Ready For Development",
          storyPoints: 2,
        },
        {
          UID: "Test UID",
          name: "Test Name",
          state: "Done",
          storyPoints: 3,
        },
      ],
    })),
  };
});

describe("ItemList", () => {
  it("renders", () => {
    render(<ItemList />);
    const titleElements = screen.getAllByText(/Test Name/i);
    expect(titleElements.length).toBe(3);

    const storyPointElement1 = screen.getAllByText(/1/i);
    expect(storyPointElement1.length).toBe(1);
    const storyPointElement2 = screen.getAllByText(/2/i);
    expect(storyPointElement2.length).toBe(1);
    const storyPointElement3 = screen.getAllByText(/3/i);
    expect(storyPointElement3.length).toBe(1);

    const identifiedElements = screen.getAllByText(/Identified/i);
    expect(identifiedElements.length).toBe(2);

    const readyElements = screen.getAllByText(/Ready For Development/i);
    expect(readyElements.length).toBe(2);

    const doneElements = screen.getAllByText(/Done/i);
    expect(doneElements.length).toBe(2);
  });
});
