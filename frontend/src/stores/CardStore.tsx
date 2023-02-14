import { create } from "zustand";

export const useCardStore = create((set) => ({

  productBacklog: null,

  setProductBacklog: (state: any) =>
    set(() => ({
      productBacklog: state.filter(
        (state: any) => state.title === "Product Backlog"
      )[0],
    })),

  splittingProductBacklogItems: null,
  setSplittingProductBacklogItems: (cards: any) =>
    set(() => ({
      splittingProductBacklogItems: cards.filter(
        (card: any) => card.title === "Splitting Product Backlog Items"
      )[0],
    })),

  relativeEstimating: null,
  setRelativeEstimating: (cards: any) =>
    set(() => ({
      relativeEstimating: cards.filter(
        (card: any) => card.title === "Relative Estimating"
      )[0],
    })),
}));


