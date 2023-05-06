import { create } from "zustand";
import { type IComponent } from "./ComponentStore";
import { type IAlphaItem } from "../hooks/useItemData";

interface IAlphaItemStore {
  prepareAProductBacklogItem: IComponent | null;
  setPrepareAProductBacklogItem: (
    cards: IComponent[] | null
  ) => void | undefined;
  definitionOfDone: IComponent | null;
  setDefinitionOfDone: (cards: IComponent[] | null) => void | undefined;
  testCase: IComponent | null;
  setTestCase: (cards: IComponent[] | null) => void | undefined;
  productBacklogItem: IComponent | null;
  setProductBacklogItem: (cards: IComponent[] | null) => void | undefined;
  agreeDefinitionOfDone: IComponent | null;
  setAgreeDefinitionOfDone: (cards: IComponent[] | null) => void | undefined;
  invest: IComponent | null;
  setInvest: (cards: IComponent[] | null) => void | undefined;
  alphaItem: IAlphaItem | null;
  setAlphaItem: (card: IAlphaItem | null) => void | undefined;
}

export const useAlphaItemStore = create<IAlphaItemStore>()((set) => ({
  prepareAProductBacklogItem: null,
  setPrepareAProductBacklogItem: (cards) => {
    if (Array.isArray(cards)) {
      set(() => ({
        prepareAProductBacklogItem: cards.filter(
          (card) => card.title === "Prepare a Product Backlog Item"
        )[0],
      }));
    }
  },

  definitionOfDone: null,
  setDefinitionOfDone: (cards) => {
    if (Array.isArray(cards)) {
      set(() => ({
        definitionOfDone: cards.filter(
          (card) => card.title === "Definition of Done"
        )[0],
      }));
    }
  },

  testCase: null,
  setTestCase: (cards) => {
    if (Array.isArray(cards)) {
      set(() => ({
        testCase: cards.filter((card) => card.title === "Test Case")[0],
      }));
    }
  },

  productBacklogItem: null,
  setProductBacklogItem: (cards) => {
    if (Array.isArray(cards)) {
      set(() => ({
        productBacklogItem: cards.filter(
          (card) => card.title === "Product Backlog Item"
        )[0],
      }));
    }
  },

  agreeDefinitionOfDone: null,
  setAgreeDefinitionOfDone: (cards) => {
    if (Array.isArray(cards)) {
      set(() => ({
        agreeDefinitionOfDone: cards.filter(
          (card) => card.title === "Agree Definition of Done"
        )[0],
      }));
    }
  },

  invest: null,
  setInvest: (cards) => {
    if (Array.isArray(cards)) {
      set(() => ({
        invest: cards.filter((card) => card.title === "INVEST")[0],
      }));
    }
  },

  alphaItem: null,
  setAlphaItem: (alphaItem) => {
    set(() => ({ alphaItem }));
  },
}));
