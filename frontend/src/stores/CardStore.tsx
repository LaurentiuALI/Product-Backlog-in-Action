import { create } from "zustand";
import { type IComponent } from "./ComponentStore";

interface ICardStore {
  productBacklog: IComponent | null;
  setProductBacklog: (cards: IComponent[] | null) => void | undefined;
  splittingProductBacklogItems: IComponent | null;
  setSplittingProductBacklogItems: (
    cards: IComponent[] | null
  ) => void | undefined;
  relativeEstimating: IComponent | null;
  setRelativeEstimating: (cards: IComponent[] | null) => void | undefined;
}

export const useCardStore = create<ICardStore>()((set) => ({
  productBacklog: null,
  setProductBacklog: (cards) => {
    if (Array.isArray(cards)) {
      set(() => ({
        productBacklog: cards.filter(
          (state) => state.title === "Product Backlog"
        )[0],
      }));
    } else {
      set(() => ({
        productBacklog: cards,
      }));
    }
  },

  splittingProductBacklogItems: null,
  setSplittingProductBacklogItems: (cards) => {
    if (Array.isArray(cards)) {
      set(() => ({
        splittingProductBacklogItems: cards.filter(
          (card) => card.title === "Splitting Product Backlog Items"
        )[0],
      }));
    }
  },

  relativeEstimating: null,
  setRelativeEstimating: (cards) => {
    if (Array.isArray(cards)) {
      set(() => ({
        relativeEstimating: cards.filter(
          (card) => card.title === "Relative Estimating"
        )[0],
      }));
    }
  },
}));
