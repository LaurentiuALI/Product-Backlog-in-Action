import { render, screen, renderHook, act } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";

import {
  MockStateAchieved,
  MockStateUnachieved,
  MockStateUnachievedOpt,
  MockStateInvalid,
} from "./constants";

import { useComponentStore } from "../../../../stores/ComponentStore";

import stateAchieved from "../../icons/stateAchieved.svg";
import { StateAchieved } from "../ChecklistItem/StateAchieved";

import stateUnachieved from "../../icons/stateUnachieved.svg";
import { StateUnachieved } from "./StateUnachieved";

import stateUnachievedOpt from "../../icons/stateUnachievedOpt.svg";
import { StateUnachievedOpt } from "./StateUnachievedOpt";

import ChecklistItem from "../ChecklistItem";

describe("ChecklistItem", () => {
  describe("StateAchieved", () => {
    it("should render", () => {
      render(<StateAchieved state={MockStateAchieved} />);
      const imgElement = screen.getByRole("img", { name: "State Achieved" });
      expect(imgElement).toHaveAttribute("src", stateAchieved);
      expect(imgElement).toBeInTheDocument();

      const pElement = screen.getByText(MockStateAchieved.name);
      expect(pElement).toBeInTheDocument();
    });

    it("should change state of component on click", async () => {
      const { result } = renderHook(() => useComponentStore());

      render(<StateAchieved state={MockStateAchieved} />);
      const imgElement = screen.getByRole("img", { name: "State Achieved" });
      expect(imgElement).toHaveAttribute("src", stateAchieved);
      expect(imgElement).toBeInTheDocument();

      const pElement = screen.getByText(MockStateAchieved.name);
      expect(pElement).toBeInTheDocument();

      await userEvent.click(pElement);
      expect(result.current.component).toBe(MockStateAchieved);
      act(() => result.current.setComponent(null));

      await userEvent.click(imgElement);
      expect(result.current.component).toBe(MockStateAchieved);
    });
  });

  describe("StateUnachieved", () => {
    it("should render", () => {
      render(<StateUnachieved state={MockStateUnachieved} />);
      const imgElement = screen.getByRole("img", { name: "State Unachieved" });
      expect(imgElement).toHaveAttribute("src", stateUnachieved);
      expect(imgElement).toBeInTheDocument();

      const pElement = screen.getByText(MockStateUnachieved.name);
      expect(pElement).toBeInTheDocument();
    });
    it("should change state of component on click", async () => {
      const { result } = renderHook(() => useComponentStore());
      render(<StateUnachieved state={MockStateUnachieved} />);
      const imgElement = screen.getByRole("img", { name: "State Unachieved" });
      expect(imgElement).toHaveAttribute("src", stateUnachieved);
      expect(imgElement).toBeInTheDocument();

      const pElement = screen.getByText(MockStateUnachieved.name);
      expect(pElement).toBeInTheDocument();

      await userEvent.click(pElement);
      expect(result.current.component).toBe(MockStateUnachieved);
      act(() => result.current.setComponent(null));

      await userEvent.click(imgElement);
      expect(result.current.component).toBe(MockStateUnachieved);
    });
  });

  describe("StateUnachievedOpt", () => {
    it("should render", () => {
      render(<StateUnachievedOpt state={MockStateUnachievedOpt} />);
      const imgElement = screen.getByRole("img", { name: "State Unachieved" });
      expect(imgElement).toHaveAttribute("src", stateUnachievedOpt);
      expect(imgElement).toBeInTheDocument();

      const pElement = screen.getByText(MockStateUnachievedOpt.name);
      expect(pElement).toBeInTheDocument();
    });
    it("should change state of component on click", async () => {
      const { result } = renderHook(() => useComponentStore());
      render(<StateUnachievedOpt state={MockStateUnachievedOpt} />);
      const imgElement = screen.getByRole("img", { name: "State Unachieved" });
      expect(imgElement).toHaveAttribute("src", stateUnachievedOpt);
      expect(imgElement).toBeInTheDocument();

      const pElement = screen.getByText(MockStateUnachievedOpt.name);
      expect(pElement).toBeInTheDocument();

      await userEvent.click(pElement);
      expect(result.current.component).toBe(MockStateUnachievedOpt);
      act(() => result.current.setComponent(null));

      await userEvent.click(imgElement);
      expect(result.current.component).toBe(MockStateUnachievedOpt);
    });
  });

  it("shouldn't render anything if props.state is undefined", () => {
    render(<ChecklistItem state={MockStateInvalid} />);
    const imgElement = screen.queryByRole("img", { name: "State Achieved" });
    expect(imgElement).not.toBeInTheDocument();

    const pElement = screen.queryByText(MockStateInvalid.name);
    expect(pElement).not.toBeInTheDocument();

    const imgElement2 = screen.queryByRole("img", {
      name: "State Unachieved",
    });
    expect(imgElement2).not.toBeInTheDocument();

    const pElement2 = screen.queryByText(MockStateInvalid.name);
    expect(pElement2).not.toBeInTheDocument();

    const imgElement3 = screen.queryByRole("img", {
      name: "State Unachieved",
    });
    expect(imgElement3).not.toBeInTheDocument();

    const pElement3 = screen.queryByText(MockStateInvalid.name);
    expect(pElement3).not.toBeInTheDocument();
  });

  it("should render State Achieved", async () => {
    const { result } = renderHook(() => useComponentStore());
    render(<ChecklistItem state={MockStateAchieved} />);
    const imgElement = screen.getByRole("img", { name: "State Achieved" });
    expect(imgElement).toHaveAttribute("src", stateAchieved);
    expect(imgElement).toBeInTheDocument();

    const pElement = screen.getByText(MockStateAchieved.name);
    expect(pElement).toBeInTheDocument();

    await userEvent.click(pElement);
    expect(result.current.component).toBe(MockStateAchieved);
    act(() => result.current.setComponent(null));

    await userEvent.click(imgElement);
    expect(result.current.component).toBe(MockStateAchieved);
  });

  it("should render State Unachieved", async () => {
    const { result } = renderHook(() => useComponentStore());
    render(<ChecklistItem state={MockStateUnachieved} />);
    const imgElement = screen.getByRole("img", { name: "State Unachieved" });
    expect(imgElement).toHaveAttribute("src", stateUnachieved);
    expect(imgElement).toBeInTheDocument();

    const pElement = screen.getByText(MockStateUnachieved.name);
    expect(pElement).toBeInTheDocument();

    await userEvent.click(pElement);
    expect(result.current.component).toBe(MockStateUnachieved);
    act(() => result.current.setComponent(null));

    await userEvent.click(imgElement);
    expect(result.current.component).toBe(MockStateUnachieved);
  });

  it("should render State Unachieved Opt", async () => {
    const { result } = renderHook(() => useComponentStore());
    render(<ChecklistItem state={MockStateUnachievedOpt} />);
    const imgElement = screen.getByRole("img", { name: "State Unachieved" });
    expect(imgElement).toHaveAttribute("src", stateUnachievedOpt);
    expect(imgElement).toBeInTheDocument();

    const pElement = screen.getByText(MockStateUnachievedOpt.name);
    expect(pElement).toBeInTheDocument();

    await userEvent.click(pElement);
    expect(result.current.component).toBe(MockStateUnachievedOpt);
    act(() => result.current.setComponent(null));

    await userEvent.click(imgElement);
    expect(result.current.component).toBe(MockStateUnachievedOpt);
  });
});
