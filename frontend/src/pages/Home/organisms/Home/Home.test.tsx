import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { SplittingPattern, ProductBacklog, RelativePattern } from "./constants";

import { QueryClient, QueryClientProvider } from "react-query";
import { Home } from ".";
import { BrowserRouter } from "react-router-dom";

const queryClient = new QueryClient();

const MockedHome = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </QueryClientProvider>
  );
};
vi.mock("../../../../hooks/useCardsData", () => {
  return {
    useCardData: vi.fn(() => ({
      productBacklog: ProductBacklog,
      splittingProductBacklogItems: SplittingPattern,
      relativeEstimating: RelativePattern,
      patchCard: vi.fn(),
      setProductBacklog: vi.fn(),
    })),
  };
});
describe("Home", () => {
  // beforeEach and afterEach hooks

  it("renders", async () => {
    render(<MockedHome />);
    const titleElement = await screen.findByText(/Add.../i);
    expect(titleElement).toBeInTheDocument();

    const titleElement2 = await screen.findByText(/^Product Backlog/i);
    expect(titleElement2).toBeInTheDocument();

    const titleElement3 = await screen.findByText(
      /Splitting Product Backlog Items/i
    );
    expect(titleElement3).toBeInTheDocument();

    const titleElement4 = await screen.findByText(/Relative Estimating/i);
    expect(titleElement4).toBeInTheDocument();

    const itemsGathered = await screen.findByText(/Items Gathered/i);
    expect(itemsGathered).toBeInTheDocument();

    const itemsPrioritized = await screen.findByText(/Items Prioritized/i);
    expect(itemsPrioritized).toBeInTheDocument();

    const CostBenefitQuantified = await screen.findByText(
      /Cost-Benefit Quantified/i
    );
    expect(CostBenefitQuantified).toBeInTheDocument();
  });
});
