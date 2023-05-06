import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, vi } from "vitest";

import Add from ".";

vi.mock("react-query", () => {
  return {
    useQueryClient: vi.fn(),
    useMutation: vi.fn(() => ({
      mutate: vi.fn(),
    })),
  };
});

describe("Add", () => {
  it("renders", async () => {
    render(<Add toggleAdd={vi.fn()} />);
    const titleElement = screen.getByText(/Time for a new/i);
    expect(titleElement).toBeInTheDocument();

    const nameElement = screen.getByLabelText(/Item Name/i);
    expect(nameElement).toBeInTheDocument();

    const nameInputElement = screen.getByRole("textbox", {
      name: /Item Name/i,
    });
    expect(nameInputElement).toBeInTheDocument();

    const descriptionElement = screen.getByLabelText(/description/i);
    expect(descriptionElement).toBeInTheDocument();

    const descriptionInputElement = screen.getByRole("textbox", {
      name: /description/i,
    });
    expect(descriptionInputElement).toBeInTheDocument();

    const storyPointsElement = screen.getByText(/Story Points/i);
    expect(storyPointsElement).toBeInTheDocument();

    const radioElements = await screen.findAllByRole("radio");
    expect(radioElements.length).toEqual(5);
  });
  it("updates the inputs", async () => {
    render(<Add toggleAdd={vi.fn()} />);
    const nameInputElement = screen.getByRole("textbox", {
      name: /Item Name/i,
    });
    const descriptionInputElement = screen.getByRole("textbox", {
      name: /description/i,
    });
    const radioElements = await screen.findAllByRole("radio");

    await userEvent.type(nameInputElement, "Test Name");
    expect(nameInputElement).toHaveValue("Test Name");

    await userEvent.type(descriptionInputElement, "Test description");
    expect(descriptionInputElement).toHaveValue("Test description");

    await userEvent.click(radioElements[2]);
    expect(radioElements[0]).not.toBeChecked();
    expect(radioElements[1]).not.toBeChecked();
    expect(radioElements[2]).toBeChecked();
    expect(radioElements[3]).not.toBeChecked();
    expect(radioElements[4]).not.toBeChecked();

    const submitButton = screen.getByRole("button", { name: /Add/i });
    await userEvent.click(submitButton);
  });
});
