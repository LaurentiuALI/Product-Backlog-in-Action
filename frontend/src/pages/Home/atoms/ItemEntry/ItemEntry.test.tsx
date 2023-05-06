import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import * as ReactRouter from "react-router";

import ItemEntry from ".";
import { alphaItem } from "./constants";
import { type IAlphaItem } from "../../../../hooks/useItemData";

const MockItemEntry: React.FC<{ item: IAlphaItem }> = ({ item }) => {
  return (
    <BrowserRouter>
      <ItemEntry item={item} />
    </BrowserRouter>
  );
};

describe("ItemEntry", () => {
  it("should render the component", async () => {
    render(<MockItemEntry item={alphaItem} />);

    const nameElement = await screen.findByText(`${alphaItem.name}`);
    expect(nameElement).toBeInTheDocument();

    const storyPointsElement = await screen.findByRole("heading", {
      name: `${alphaItem.storyPoints}`,
    });
    expect(storyPointsElement).toBeInTheDocument();

    const stateElement = await screen.findByRole("heading", {
      name: `${alphaItem.state}`,
    });
    expect(stateElement).toBeInTheDocument();
  });
  it("should navigate to the correct page", async () => {
    render(<MockItemEntry item={alphaItem} />);
    const spy = vi.spyOn(ReactRouter, "useNavigate");

    const itemEntry = await screen.findByText(`${alphaItem.name}`);
    await userEvent.click(itemEntry);

    expect(spy).toBeCalledTimes(1);
  });
});
