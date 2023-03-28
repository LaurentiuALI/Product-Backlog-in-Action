import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { workProductComponent } from "./constants";

import Sidebar from ".";
import userEvent from "@testing-library/user-event";

vi.mock("../../../../hooks/useCardsData", () => {
  return {
    useCardData: vi.fn(() => ({
      isLoading: false,
      error: null,
      data: {
        workProductComponent,
      },
      productBacklog: workProductComponent,
      splittingProductBacklogItems: null,
      relativeEstimating: null,
      patchCard: vi.fn(),
      setProductBacklog: vi.fn(),
    })),
  };
});

describe("Sidebar", () => {
  it("renders", async () => {
    render(<Sidebar />);
    const titleElement = screen.getByText(/Add Product Backlog Item/i);
    expect(titleElement).toBeInTheDocument();

    const productBacklog = screen.getByText(/^Product Backlog/i);
    expect(productBacklog).toBeInTheDocument();

    const itemsGathered = screen.getByText(/^Items Gathered/i);
    expect(itemsGathered).toBeInTheDocument();

    const ItemsPrioritized = screen.getByText(/^Items Prioritized/i);
    expect(ItemsPrioritized).toBeInTheDocument();

    const CostBenefitQuantified = screen.getByText(/^Cost-Benefit Quantified/i);
    expect(CostBenefitQuantified).toBeInTheDocument();
  });
  it("renders card on click", async () => {
    render(<Sidebar />);
    const productBacklog = screen.getByText(/^Product Backlog/i);
    const itemsGathered = screen.getByText(/^Items Gathered/i);
    const ItemsPrioritized = screen.getByText(/^Items Prioritized/i);
    const CostBenefitQuantified = screen.getByText(/^Cost-Benefit Quantified/i);

    await userEvent.click(productBacklog);
    const descriptionElement = screen.getByText(/An ordered list/i);
    expect(descriptionElement).toBeInTheDocument();

    await userEvent.click(itemsGathered);
    const checkboxesItemsGathered = screen.getAllByRole("checkbox");
    expect(checkboxesItemsGathered).toHaveLength(
      workProductComponent.states[0].checklist.length
    );
    expect(descriptionElement).not.toBeInTheDocument();

    await userEvent.click(ItemsPrioritized);
    const checkboxesItemsPrioritized = screen.getAllByRole("checkbox");
    expect(checkboxesItemsPrioritized).toHaveLength(
      workProductComponent.states[1].checklist.length
    );
    expect(descriptionElement).not.toBeInTheDocument();

    await userEvent.click(CostBenefitQuantified);
    const checkboxesCostBenefitQuantified = screen.getAllByRole("checkbox");
    expect(checkboxesCostBenefitQuantified).toHaveLength(
      workProductComponent.states[2].checklist.length
    );
    expect(descriptionElement).not.toBeInTheDocument();
  });
});
