import { create } from "zustand";

type ComponentStore = {
  component: any;
  setComponent: (component: any) => void | undefined;
};

export const useComponentStore = create<ComponentStore>((set) => ({
  component: null,
  setComponent: (_component: any) =>
    set(() => ({
      component: _component,
    })),
}));
