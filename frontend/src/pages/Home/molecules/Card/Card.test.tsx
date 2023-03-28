import { render, screen, renderHook, act } from "@testing-library/react";
import { describe, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";

import {
  patternComponent,
  stateComponent,
  workProductComponent,
} from "./constants";

import { PatternCard } from "./PatternCard";
import { StateCard } from "./StateCard";
import { WorkProductCard } from "./WorkProductCard";
import Card from ".";

import { QueryClient, QueryClientProvider } from "react-query";

import { useComponentStore } from "../../../../stores/ComponentStore";

vi.mock("../../../../hooks/useCardsData", () => ({
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
}));

const queryClient = new QueryClient();

const MockCard = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Card />
    </QueryClientProvider>
  );
};

describe("Card", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  const testPattern = () => {
    const titleElement = screen.getByText(patternComponent.title);
    expect(titleElement).toBeInTheDocument();

    const substring = patternComponent.description.substring(0, 20);
    const descriptionElement = screen.getByText(new RegExp(substring, "i"));
    expect(descriptionElement).toBeInTheDocument();
  };

  describe("PatternCard", () => {
    it("renders", () => {
      render(<PatternCard component={patternComponent} />);
      testPattern();
    });
  });

  const testState = () => {
    const titleElement = screen.getByText(stateComponent.name);
    expect(titleElement).toBeInTheDocument();

    const checkboxes = screen.getAllByRole("checkbox");
    expect(checkboxes.length).toBe(stateComponent.checklist.length);
  };

  describe("StateCard", () => {
    it("renders", () => {
      render(<StateCard component={stateComponent} />);
      testState();
    });
    it("updates checklist", async () => {
      const setFlag = vi.fn();
      const flag = false;
      render(
        <StateCard component={stateComponent} setFlag={setFlag} flag={flag} />
      );
      const checkboxes = screen.getAllByRole("checkbox");
      expect(checkboxes.length).toBe(stateComponent.checklist.length);

      await userEvent.click(checkboxes[0]);
      expect(setFlag).toBeCalledTimes(1);
      await userEvent.click(checkboxes[0]);
      expect(setFlag).toBeCalledTimes(2);

      await userEvent.click(checkboxes[1]);
      expect(setFlag).toBeCalledTimes(3);
      await userEvent.click(checkboxes[1]);
      expect(setFlag).toBeCalledTimes(4);

      await userEvent.click(checkboxes[2]);
      expect(setFlag).toBeCalledTimes(5);
      await userEvent.click(checkboxes[2]);
      expect(setFlag).toBeCalledTimes(6);
    });
  });

  const testWorkProduct = () => {
    const titleElement = screen.getByText(workProductComponent.title);
    expect(titleElement).toBeInTheDocument();

    const substring = workProductComponent.description.substring(0, 20);
    const descriptionElement = screen.getByText(new RegExp(substring, "i"));
    expect(descriptionElement).toBeInTheDocument();

    const states = [];
    for (let i = 0; i < workProductComponent.states.length; i++) {
      states.push(screen.getByText(workProductComponent.states[i].name));
    }
    expect(states.length).toBe(workProductComponent.states.length);
  };

  describe("WorkProductCard", () => {
    it("renders", () => {
      render(<WorkProductCard component={workProductComponent} />);
      testWorkProduct();
    });
  });

  it("renders", () => {
    const { result } = renderHook(() => useComponentStore());

    render(<MockCard />);

    act(() => result.current.setComponent(workProductComponent));
    testWorkProduct();

    act(() => result.current.setComponent(patternComponent));
    testPattern();

    act(() => result.current.setComponent(stateComponent));
    testState();
  });
});
