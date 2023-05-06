import { render, screen, renderHook, act } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import { QueryClientProvider, QueryClient } from "react-query";
import ChecklistParent from ".";
import { useComponentStore } from "../../../../stores/ComponentStore";
import workproduct from "../../icons/workProduct.svg";

const queryClient = new QueryClient();

const MockChecklistParent = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ChecklistParent />
    </QueryClientProvider>
  );
};

describe("ChecklistParent", () => {
  it("should render", async () => {
    render(<MockChecklistParent />);
    const textElement = await screen.findByText(/Product Backlog/i);
    expect(textElement).toBeInTheDocument();

    const imgElement = await screen.findByRole("img", {
      name: /Work Product/i,
    });
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute("src", workproduct);
  });

  it("should change component value", async () => {
    const { result } = renderHook(() => useComponentStore());

    render(<MockChecklistParent />);

    const textElement = await screen.findByText(/Product Backlog/i);
    expect(textElement).toBeInTheDocument();
    expect(result.current.component).toBe(null);

    await userEvent.click(textElement);
    expect(result.current.component).not.toBe(null);

    act(() => result.current.setComponent(null));
    expect(result.current.component).toBe(null);

    const imgElement = await screen.findByRole("img", {
      name: /Work Product/i,
    });
    expect(imgElement).toBeInTheDocument();
    await userEvent.click(imgElement);
    expect(result.current.component).not.toBe(null);
  });
});
