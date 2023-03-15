import { create } from "zustand";

export const useCardStore = create((set) => ({
  productBacklog: null,
  setProductBacklog: (state: any) => {
    if (Array.isArray(state)) {
      set(() => ({
        productBacklog: state.filter(
          (state: any) => state.title === "Product Backlog"
        )[0],
      }));
    } else {
      set(() => ({
        productBacklog: state,
      }));
    }
  },

  splittingProductBacklogItems: null,
  setSplittingProductBacklogItems: (cards: any) => {
    if (Array.isArray(cards)) {
      set(() => ({
        splittingProductBacklogItems: cards.filter(
          (card: any) => card.title === "Splitting Product Backlog Items"
        )[0],
      }));
    }
  },

  relativeEstimating: null,
  setRelativeEstimating: (cards: any) => {
    if (Array.isArray(cards)) {
      set(() => ({
        relativeEstimating: cards.filter(
          (card: any) => card.title === "Relative Estimating"
        )[0],
      }));
    }
  },
}));
