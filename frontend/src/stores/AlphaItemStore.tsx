import { create } from "zustand";

export const useAlphaItemStore = create((set) => ({
  prepareAProductBacklogItem: null,
  setPrepareAProductBacklogItem: (cards: any) => {
    if (Array.isArray(cards)) {
      set(() => ({
        prepareAProductBacklogItem: cards.filter(
          (card: any) => card.title === "Prepare a Product Backlog Item"
        )[0],
      }));
    }
  },

  definitionOfDone: null,
  setDefinitionOfDone: (cards: any) => {
    if (Array.isArray(cards)) {
      set(() => ({
        definitionOfDone: cards.filter(
          (card: any) => card.title === "Definition of Done"
        )[0],
      }));
    }
  },

  testCase: null,
  setTestCase: (cards: any) => {
    if (Array.isArray(cards)) {
      set(() => ({
        testCase: cards.filter((card: any) => card.title === "Test Case")[0],
      }));
    }
  },

  productBacklogItem: null,
  setProductBacklogItem: (cards: any) => {
    if (Array.isArray(cards)) {
      set(() => ({
        productBacklogItem: cards.filter(
          (card: any) => card.title === "Product Backlog Item"
        )[0],
      }));
    }
  },

  agreeDefinitionOfDone: null,
  setAgreeDefinitionOfDone: (cards: any) => {
    if (Array.isArray(cards)) {
      set(() => ({
        agreeDefinitionOfDone: cards.filter(
          (card: any) => card.title === "Agree Definition of Done"
        )[0],
      }));
    }
  },

  invest: null,
  setInvest: (cards: any) => {
    if (Array.isArray(cards)) {
      set(() => ({
        invest: cards.filter((card: any) => card.title === "INVEST")[0],
      }));
    }
  },
}));
