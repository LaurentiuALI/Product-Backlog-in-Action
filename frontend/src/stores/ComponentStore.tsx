import { create } from "zustand";

export interface IStateChecklist {
  _id: string;
  checked: boolean;
  name: string;
}

export interface IComponentState {
  _id: string;
  checklist: IStateChecklist[];
  name: string;
  optional: boolean;
  status: number;
}

export interface IComponent {
  _id: string;
  createdAt: string;
  description: string;
  states: IComponentState[];
  status: number;
  title: string;
  type: string;
  updatedAt: string;
}

type ComponentStore = {
  component: IComponent | null;
  setComponent: (component: IComponent | null) => void | undefined;
  componentState: IComponentState | null;
  setComponentState: (componentState: IComponentState | null) => void;
};

export const useComponentStore = create<ComponentStore>()((set) => ({
  component: null,
  setComponent: (_component) =>
    set(() => ({
      component: _component,
    })),
  componentState: null,
  setComponentState: (_componentState) =>
    set(() => ({
      componentState: _componentState,
    })),
}));
