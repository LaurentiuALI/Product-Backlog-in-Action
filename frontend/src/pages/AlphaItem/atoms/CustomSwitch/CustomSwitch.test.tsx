import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";

import SwitchOff from "../../icons/switchOff.svg";
import SwitchOn from "../../icons/switchOn.svg";

import { componentState, stateChecklist } from "./constants";

import { CustomSwitch } from ".";

describe("CustomSwitch", () => {
  it("should render the component", async () => {
    render(
      <CustomSwitch
        componentState={componentState}
        stateChecklist={stateChecklist}
        flag={true}
        setFlag={vi.fn()}
      />
    );

    const switchElement = await screen.findByRole("img");
    expect(switchElement).toHaveAttribute("src", SwitchOn);
  });
  it("should change the state when clicked", async () => {
    render(
      <CustomSwitch
        componentState={componentState}
        stateChecklist={stateChecklist}
        flag={true}
        setFlag={vi.fn()}
      />
    );

    const switchElement = await screen.findByRole("img");
    await userEvent.click(switchElement);

    expect(switchElement).toHaveAttribute("src", SwitchOff);
  });
});
