import { create } from "zustand";

export const useComponentStore = create((set) => ({
  component: null,
  setComponent: (_component: any) =>
    set(() => ({
      component: _component,
    })),
}));
