import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";

import radio1 from "../../icons/radio-1.svg";
import radio2 from "../../icons/radio-2.svg";
import radio3 from "../../icons/radio-3.svg";
import radio5 from "../../icons/radio-5.svg";
import radio8 from "../../icons/radio-8.svg";

import CustomCheckbox from ".";

describe("CustomCheckbox", () => {
  it("renders", async () => {
    const radio = [radio1, radio2, radio3, radio5, radio8];

    [1, 2, 3, 5, 8].forEach((number) => {
      render(<CustomCheckbox number={number} />);
    });

    const radioElements = await screen.findAllByRole("radio");
    expect(radioElements.length).toEqual(5);

    const imgElements = await screen.findAllByRole("img");
    expect(imgElements.length).toEqual(5);

    for (let i = 0; i < imgElements.length; i++) {
      expect(imgElements[i]).toHaveAttribute("src", radio[i]);
    }
  });

  it("selects only one radio button", async () => {
    const customClick = vi.fn();

    [1, 2, 3, 5, 8].forEach((number) => {
      render(<CustomCheckbox number={number} onCustomClick={customClick} />);
    });

    const radioElements = await screen.findAllByRole("radio");
    const imgElements = await screen.findAllByRole("img");

    await userEvent.click(imgElements[0]);
    expect(customClick).toHaveBeenCalled();
    expect(radioElements[0]).toBeChecked();
    expect(radioElements[1]).not.toBeChecked();
    expect(radioElements[2]).not.toBeChecked();
    expect(radioElements[3]).not.toBeChecked();
    expect(radioElements[4]).not.toBeChecked();

    await userEvent.click(imgElements[1]);
    expect(customClick).toHaveBeenCalled();
    expect(radioElements[1]).toBeChecked();
    expect(radioElements[0]).not.toBeChecked();
    expect(radioElements[2]).not.toBeChecked();
    expect(radioElements[3]).not.toBeChecked();
    expect(radioElements[4]).not.toBeChecked();

    await userEvent.click(imgElements[2]);
    expect(customClick).toHaveBeenCalled();
    expect(radioElements[2]).toBeChecked();
    expect(radioElements[0]).not.toBeChecked();
    expect(radioElements[1]).not.toBeChecked();
    expect(radioElements[3]).not.toBeChecked();
    expect(radioElements[4]).not.toBeChecked();

    await userEvent.click(imgElements[3]);
    expect(customClick).toHaveBeenCalled();
    expect(radioElements[3]).toBeChecked();
    expect(radioElements[0]).not.toBeChecked();
    expect(radioElements[1]).not.toBeChecked();
    expect(radioElements[2]).not.toBeChecked();
    expect(radioElements[4]).not.toBeChecked();

    await userEvent.click(imgElements[4]);
    expect(customClick).toHaveBeenCalled();
    expect(radioElements[4]).toBeChecked();
    expect(radioElements[0]).not.toBeChecked();
    expect(radioElements[1]).not.toBeChecked();
    expect(radioElements[2]).not.toBeChecked();
  });
});
