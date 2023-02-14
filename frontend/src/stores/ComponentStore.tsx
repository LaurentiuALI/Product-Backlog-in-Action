import { create } from "zustand";

export const useComponentStore = create((set) => ({
  component: null,
  setComponent: (_component: any, _type: any) =>
    set((state: any) => ({
      component: { ..._component, type: _type },
    })),
}));
