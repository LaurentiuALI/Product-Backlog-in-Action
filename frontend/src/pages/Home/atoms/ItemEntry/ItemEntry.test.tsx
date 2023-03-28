import { render, screen, renderHook } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import * as ReactRouter from "react-router";

import ItemEntry from ".";
import { test } from "./constants";

const MockItemEntry = (props: any) => {
  return (
    <BrowserRouter>
      <ItemEntry item={props.item.item} />
    </BrowserRouter>
  );
};

describe("ItemEntry", () => {
  it("should render the component", async () => {
    render(<MockItemEntry item={test} />);

    const UIDelement = await screen.findByRole("heading", {
      name: `${test.item.UID}`,
    });
    expect(UIDelement).toBeInTheDocument();

    const nameElement = await screen.findByRole("heading", {
      name: `${test.item.name}`,
    });
    expect(nameElement).toBeInTheDocument();

    const storyPointsElement = await screen.findByRole("heading", {
      name: `${test.item.storyPoints}`,
    });
    expect(storyPointsElement).toBeInTheDocument();

    const stateElement = await screen.findByRole("heading", {
      name: `${test.item.state}`,
    });
    expect(stateElement).toBeInTheDocument();
  });
  it("should navigate to the correct page", async () => {
    render(<MockItemEntry item={test} />);
    const spy = vi.spyOn(ReactRouter, "useNavigate");

    const itemEntry = await screen.findByRole("heading", {
      name: `${test.item.UID}`,
    });
    await userEvent.click(itemEntry);

    expect(spy).toBeCalledTimes(1);
  });
});
