import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddAlpha from "./AddAlpha";
import add from "../../icons/add.svg";
import { vi, describe, it, afterEach } from "vitest";

describe("AddAlpha", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should render", () => {
    render(<AddAlpha addActive={vi.fn()} />);

    const textElement = screen.getByText(/Add Product Backlog Item/i);
    expect(textElement).toBeInTheDocument();

    const imgElement = screen.getByRole("img", { name: /add/i });
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute("src", add);
  });

  it("should call addActive function prop", async () => {
    const addActive = vi.fn();

    render(<AddAlpha addActive={addActive} />);

    const imgElement = screen.getByRole("img", { name: /add/i });
    const textElement = screen.getByText(/Add Product Backlog Item/i);

    await userEvent.click(imgElement);
    await userEvent.click(textElement);
    expect(addActive).toHaveBeenCalledTimes(2);
  });
});
