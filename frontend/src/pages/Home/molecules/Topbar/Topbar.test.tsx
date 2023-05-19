import { render, renderHook, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { BrowserRouter } from "react-router-dom";

import Topbar from ".";
import { useComponentStore } from "../../../../stores/ComponentStore";

import { splittingItems, relativeEstimating } from "./constants";

const MockTopbar: React.FC = () => {
  return (
    <BrowserRouter>
      <Topbar />
    </BrowserRouter>
  );
};

vi.mock("../../../../hooks/useCardsData", () => {
  return {
    useCardData: vi.fn(() => ({
      isLoading: false,
      error: null,
      data: {},
      productBacklog: null,
      splittingProductBacklogItems: splittingItems,
      relativeEstimating: relativeEstimating,
      patchCard: vi.fn(),
      setProductBacklog: vi.fn(),
    })),
  };
});

describe("Topbar", () => {
  it("renders", () => {
    render(<MockTopbar />);
    const titleElement = screen.getByText(/Splitting Product Backlog Items/i);
    expect(titleElement).toBeInTheDocument();

    const titleElement2 = screen.getByText(/Relative Estimating/i);
    expect(titleElement2).toBeInTheDocument();
  });
  it("changes component", async () => {
    const { result } = renderHook(() => useComponentStore());
    render(<MockTopbar />);

    const titleElement = screen.getByText(/Splitting Product Backlog Items/i);

    await userEvent.click(titleElement);
    expect(result.current.component).toBe(splittingItems);

    const titleElement2 = screen.getByText(/Relative Estimating/i);
    await userEvent.click(titleElement2);
    expect(result.current.component).toBe(relativeEstimating);

    const imgSplitting = screen.getByAltText(/splittingProductBacklogItems/i);
    await userEvent.click(imgSplitting);
    expect(result.current.component).toBe(splittingItems);

    const imgRelative = screen.getByAltText(/relativeEstimating/i);
    await userEvent.click(imgRelative);
    expect(result.current.component).toBe(relativeEstimating);
  });
});
